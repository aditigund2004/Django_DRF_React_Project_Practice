from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ViewT

r = DefaultRouter();
r.register('crud', ViewT)

urlpatterns = [
    path('', include(r.urls))
  
]
