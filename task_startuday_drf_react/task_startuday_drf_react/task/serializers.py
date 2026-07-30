from rest_framework import serializers
from .models import Task

class TaskSeri(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"
        