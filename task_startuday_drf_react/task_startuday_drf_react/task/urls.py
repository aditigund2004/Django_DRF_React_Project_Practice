
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ViewTask

r = DefaultRouter();
r.register('task', ViewTask)


urlpatterns = [
  path('', include(r.urls))
    
]