from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .models import ModelTask
from .serializers import SeriTask

class ViewTask(viewsets.ModelViewSet):
    queryset = ModelTask.objects.all()
    serializer_class = SeriTask