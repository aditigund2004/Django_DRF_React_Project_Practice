from django.shortcuts import render
from rest_framework import viewsets
from .serializers import StudentSeri
from .models import Student

# Create your views here.
class StudentView(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSeri
    
    
# This is a ViewSet in Django REST Framework. It connects your Student model and StudentSeri serializer to API endpoints.




'''
A ViewSet allows you to create API endpoints for operations such as:

GET → retrieve students
POST → create a student
PUT → update a student
PATCH → partially update a student
DELETE → delete a student

'''

# ModelViewSet is powerful because it already provides the common CRUD operations.



'''
You don't have to manually write separate methods like:

def get(...)
def post(...)
def put(...)
def delete(...)


DRF provides them for you.
'''


'''
queryset = Student.objects.all()
This tells the ViewSet:
"Work with all Student records in the database."
'''


'''
serializer_class
serializer_class = StudentSeri
This tells the ViewSet:
"Use StudentSeri to convert and validate Student data."
'''

