from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import modelT
from .serializers import Seri

class ViewT(viewsets.ModelViewSet):
    queryset = modelT.objects.all()
    serializer_class = Seri