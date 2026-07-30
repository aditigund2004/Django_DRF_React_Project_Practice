from django.db import models

# Create your models here.

class Model(models.Model):
    name = models.CharField(max_length=10)
    email = models.CharField(max_length=10)
    mobile = models.IntegerField()
    password = models.CharField(max_length=100)
    role = models.CharField(max_length=10)
    
    class Meta:
        db_table = 'task'