from django.urls import path, include
from .views import Teamview
from rest_framework.routers import DefaultRouter


r= DefaultRouter();
r.register('team',Teamview)
urlpatterns=[
    path('',include(r.urls))
]
