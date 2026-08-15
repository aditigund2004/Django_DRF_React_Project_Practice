from rest_framework import serializers
from .models import Student

class StudentSeri(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"
        
        
# ModelSerializer is useful because DRF can automatically create serializer fields based on your Django model.

# Django model objects → JSON when sending data through an API.
# JSON → validated Python/model data when receiving data from an API.