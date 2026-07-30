from django.db import models

# Create your models here.

class modelT(models.Model):
    name= models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    
    class Meta:
        db_table = 'login'
