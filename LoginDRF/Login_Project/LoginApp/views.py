from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import LoginSerializer
from .models import Login

@api_view(['GET'])
def show(request):
    data = Login.objects.all()
    serializer=LoginSerializer(data , many=True)
    return Response(serializer.data)
@api_view(['POST'])
def create(request):
    serializer= LoginSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)
@api_view(['PUT'])
def update(request,id):
    log=Login.objects.get(id=id)
    serializer=LoginSerializer(log, data=request.data) 
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)
@api_view(['DELETE']) 
def delete(request,id):
    log=Login.objects.get(id=id)
    log.delete()
    return Response({"Delete..."})      