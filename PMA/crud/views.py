from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import Seri
from .models import Model


class View(viewsets.ModelViewSet):
    queryset = Model.objects.all()
    serializer_class = Seri