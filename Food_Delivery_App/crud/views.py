from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .serailizers import Seri
from . models import FDA

class View(viewsets.ModelViewSet):
    queryset = FDA.objects.all()
    serializer_class = Seri