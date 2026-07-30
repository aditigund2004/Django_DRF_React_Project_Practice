from django.shortcuts import render

# Create your views here.

from .serializers import SeriModel
from .models import ModelTask
from rest_framework import viewsets

class ViewTask(viewsets.ModelViewSet):
    queryset = ModelTask.objects.all()
    serializer_class = SeriModel