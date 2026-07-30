from django.shortcuts import render

# Create your views here.
# import modeL and serializer
# import api_view and response

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Student
from .serializers import StudentSerializer



# create student
@api_view(['POST'])
def create_student(request):
    serializer = StudentSerializer(data = request.data)
    
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    
    return Response(serializer.errors)


# read all students
@api_view(['GET'])
def get_students(request):
    student = Student.objects.all()
    serializer  = StudentSerializer(student, many = True)
    
    return Response(serializer.data)


# read single student
@api_view(['GET'])
def get_student(request, id):
    student = Student.objects.get()
    serializer = StudentSerializer(student)
    
    return Response(serializer.data)


# update student
@api_view(['PUT'])
def update_student(request, id):
    student = Student.objects.get(id=id)
    
    serializer = StudentSerializer(
        student,
        data = request.data
    )
    
    if serializer.is_valid():
        serializer.save()
        return Response( serializer.data)
    
    return Response(serializer.errors)



# delete student
@api_view(['DELETE'])
def delete_student(request, id):
    student = Student.objects.get(id=id)
    student.delete()
    
    return Response(
        {"message": "Student Deleted!!"}
    )




    
# from rest_framework.decorators import api_view
# from rest_framework.response import Response

# from .models import Student
# from .serializers import StudentSerializer


# @api_view(['POST'])
# def create_student(request):
#     serializer = StudentSerializer(data=request.data)

#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data)

#     return Response(serializer.errors)


# @api_view(['GET'])
# def get_students(request):
#     students = Student.objects.all()
#     serializer = StudentSerializer(students, many=True)

#     return Response(serializer.data)


# @api_view(['GET'])
# def get_student(request, id):
#     student = Student.objects.get(id=id)
#     serializer = StudentSerializer(student)

#     return Response(serializer.data)


# @api_view(['PUT'])
# def update_student(request, id):
#     student = Student.objects.get(id=id)

#     serializer = StudentSerializer(
#         student,
#         data=request.data
#     )

#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data)

#     return Response(serializer.errors)


# @api_view(['DELETE'])
# def delete_student(request, id):
#     student = Student.objects.get(id=id)
#     student.delete()

#     return Response(
#         {"message": "Student Deleted"}
#     )