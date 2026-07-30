
from django.urls import path

from . import views
    

urlpatterns = [
    path('', views.home, name='home'),
    path('show/', views.showall, name='showall'),
    path('update/<str:name>/', views.update, name='update'),
    path('delete/', views.delete, name='delete'),    
]
