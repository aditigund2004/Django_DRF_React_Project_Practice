from django.db import models

# Create your models here.

class Task(models.Model):
    id_no = models.IntegerField()
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    
    # database table name
    class Meta:
        db_table = "task1"