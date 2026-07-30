from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CRUDView

r = DefaultRouter()
r.register('crud', CRUDView)

urlpatterns = [
    path('', include(r.urls))   
]