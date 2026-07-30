from Login_Project.urls import path
from . import views

urlpatterns = [
    path('show/',views.show),
    path('create/',views.create),
    path('update/<int:id>/',views.update),
    path('delete/<int:id>/',views.delete),
]
