from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ModelView

r = DefaultRouter()
r.register('crud', ModelView)

urlpatterns = [
    path('', include(r.urls))  
]
