from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import View

r = DefaultRouter()
r.register('crud', View)


urlpatterns = [
    path('', include(r.urls))
]
