from django.db import models

# Create your models here.

class Student(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    phone = models.IntegerField()
    email = models.CharField(max_length=50)
    
    class Meta:
        db_table = 'stud'
    