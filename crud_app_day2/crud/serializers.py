

from .models import ModelTask

from rest_framework import serializers


class SeriTask(serializers.ModelSerializer):
    class Meta:
        model = ModelTask
        fields = "__all__"