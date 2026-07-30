from django.shortcuts import render

# Create your views here.

from .serializers import CRUDSeri
from .models import CRUDModel
from rest_framework import viewsets

class CRUDView(viewsets.ModelViewSet):
    queryset = CRUDModel.objects.all()
    serializer_class = CRUDSeri