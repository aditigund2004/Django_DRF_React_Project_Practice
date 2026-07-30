from django.urls import path
from .views import *

# import path and views

urlpatterns = [
    path('student/create/', create_student),
    
    path('student/',get_students),
    
    path('student/<int:id>/', get_student),
    
    path('student/update/<int:id>/', update_student),
    
    path('student/delete/<int:id>/', delete_student),
   
]
