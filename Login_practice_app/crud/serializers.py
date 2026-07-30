from rest_framework import serializers
from .models import modelT

class Seri(serializers.ModelSerializer):
    class Meta:
        model = modelT
        fields = '__all__'