

from rest_framework import serializers
from . models import FDA


class Seri(serializers.ModelSerializer):
    class Meta:
        model = FDA
        fields = '__all__'
        