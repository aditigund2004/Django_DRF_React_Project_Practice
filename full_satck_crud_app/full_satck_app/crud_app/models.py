from django.db import models

# Create your models here.

class Student(models.Model):
    name = models.CharField(max_length=100)
    number = models.BigIntegerField()
    classname = models.CharField(max_length=100)
    
    
    class Meta:
        ordering = ['id']
        
        
    def __str__(self):
        return self.name