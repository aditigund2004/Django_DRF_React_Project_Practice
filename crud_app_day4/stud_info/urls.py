from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudentView

r=DefaultRouter()
r.register('', StudentView)

urlpatterns = [
    path('',include(r.urls)),
   
]




'''
Model → defines your database structure
Serializer → handles conversion + validation
ViewSet → handles API requests/CRUD
Router/URLs → determines the API URL
'''
