# from .serializers import TaskSeri
# from rest_framework import viewsets
# from .models import Task


# class ViewTask(viewsets.ModelViewSet):
    
#     queryset = Task.objects.all()
#     serializer_class = TaskSeri
    
    
    
    
# import restrest_framework -> viewsets and .serializers -> className and .model -> className

from rest_framework import viewsets
from .serializers import TaskSeri
from .models import Task


class ViewTask(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSeri