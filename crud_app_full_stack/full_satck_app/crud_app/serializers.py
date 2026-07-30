from rest_framework import serializers

from .models import Student


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fiels = [
            'id',
            'name',
            'classname'
        ]
        
        read_only_fields = ['id']