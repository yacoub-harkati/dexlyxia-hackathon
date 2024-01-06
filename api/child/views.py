from django.shortcuts import render
from rest_framework.views import APIView, Response
from .serializers import ChildSerializer
from .models import Child


# Create your views here.
class ChildView(APIView):
    def get(self, request, pk=None):
        if pk:
            child = Child.objects.get(id=pk)
        else:
            child = Child.objects.all()
        serializer = ChildSerializer(child, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = ChildSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

