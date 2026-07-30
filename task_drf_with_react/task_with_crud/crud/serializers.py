from rest_framework import serializers
from .models import Team

class Teamseri(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = "__all__"
