from rest_framework import serializers

from .models import Student
# imported from model file


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student 
        fields = [
            'id',
            'name',
            'number',
            'classname',
        ]
        
        read_only_fiels = ['id']