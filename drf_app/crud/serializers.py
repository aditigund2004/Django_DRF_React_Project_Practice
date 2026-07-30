from .models import ModelTask
from rest_framework import serializers

class ModelSeri(serializers.ModelSerializer):
    class Meta:
        model = ModelTask
        fields = '__all__'