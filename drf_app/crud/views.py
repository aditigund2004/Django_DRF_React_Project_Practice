from django.shortcuts import render

# Create your views here.
from .models import ModelTask
from .serializers import ModelSeri
from rest_framework import viewsets


class ModelView(viewsets.ModelViewSet):
    queryset = ModelTask.objects.all()
    serializer_class = ModelSeri