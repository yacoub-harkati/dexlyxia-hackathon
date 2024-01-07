from django.shortcuts import render
from rest_framework.views import APIView, Response
from .serializers import GameSerializer, GemeResponseSerializer, CvcWordSerializer
from .models import Game, GameResponse, CvcWord
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
import os
from child.models import Child
from gtts import gTTS
from django.http import HttpResponse
from rest_framework import status




# Create your views here.
class GameView(APIView):
    def get(self, request, pk=None):
        if pk:
            game = Game.objects.get(id=pk)
        else:
            game = Game.objects.all()
        serializer = GameSerializer(game, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = GameSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
class GameResponseView(APIView):
    print('in GameResponseView')
    def get(self, request, pk=None):
        if pk:
            game = GameResponse.objects.get(id=pk)
        else:
            game = GameResponse.objects.all()
        serializer = GemeResponseSerializer(game, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = GemeResponseSerializer(data=request.data)
        if serializer.is_valid():
            validated_data = serializer.validated_data
            if request.FILES['audio']:
                file = request.FILES['audio']
                filetype = file.name.split('.')[-1]
                result = get_whisper_result(file, filetype)
                validated_data['response'] = result
                    
                validated_data['expected_response'] = validated_data['expected_response'].upper() or ''
                if result.upper() == validated_data['expected_response']:
                    validated_data['is_correct'] = True
                else:
                    validated_data['is_correct'] = False

            # if serializer.is_valid():
            serializer.save(**validated_data)
            return Response({"is_correct": serializer.data['is_correct']})
        return Response(serializer.errors)


def get_whisper_result(file, filetype):
    import requests
    files = {'audio_file': file}
    response = requests.post('http://whisper:9000/asr', files=files, data={'language': 'en', 'encoding': True, 'task': 'transcription', 'word_timestamps': False,
                                                                       'output': 'text'})
    result = response.text
    return result[0]


class CvcView(APIView):
    def get(self, request):
        cvc_words = CvcWord.objects.all()
        serializer = CvcWordSerializer(cvc_words, many=True)
        return Response(serializer.data)

class TextToSpeechAPIView(APIView):
    parser_classes = [JSONParser]

    def post(self, request, *args, **kwargs):
        text = request.data.get("text", "")

        if not text or text == "":
            return Response({"error": "No text provided"}, status=status.HTTP_400_BAD_REQUEST)

        tts = gTTS(text)
        # Save the audio file temporarily
        tts.save("/tmp/speech.mp3")

        response = None
        with open("/tmp/speech.mp3", "rb") as audio_file:
            response = HttpResponse(audio_file.read(), content_type="audio/mpeg")
            response['Content-Disposition'] = 'attachment; filename="speech.mp3"'
        os.remove("/tmp/speech.mp3")
        return response
