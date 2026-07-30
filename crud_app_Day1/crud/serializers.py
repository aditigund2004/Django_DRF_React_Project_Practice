from rest_framework import serializers
from .models import CRUDModel

class CRUDSeri(serializers.ModelSerializer):
    class Meta:
        model = CRUDModel
        fields = '__all__'