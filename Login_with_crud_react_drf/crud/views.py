from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Model
from .serializers import Seri

class View(viewsets.ModelViewSet):
    queryset = Model.objects.all()
    serializer_class = Seri