from rest_framework import serializers
from .models import Game, GameResponse, CvcWord

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'

class GemeResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameResponse
        fields = '__all__'

class CvcWordSerializer(serializers.ModelSerializer):
    class Meta:
        model = CvcWord
        fields = '__all__'
