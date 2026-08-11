# from django.shortcuts import render
from rest_framework import status, viewsets

from rest_framework.decorators import action

from rest_framework.response import Response

from .models import Student
from .serializers import StudentSerializer

# Create your views here.

class StudentViewSet(viewsets.ModelViewSet):
    
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    
    @action(detail=False, methods=['POST'], url_path='bulk-create')
    def bulk_create(self, request):
        serializer = self.get_serializer(data = request.data, many = True)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)