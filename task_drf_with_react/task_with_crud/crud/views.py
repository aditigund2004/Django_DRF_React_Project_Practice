from .serializers import Teamseri
from rest_framework import viewsets
from .models import Team

class Teamview(viewsets.ModelViewSet) :
    queryset= Team.objects.all();
    serializer_class= Teamseri
    
    