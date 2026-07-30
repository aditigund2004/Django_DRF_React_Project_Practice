from django.db import models

# Create your models here.

class CRUDModel(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    address = models.CharField(max_length=100)
    
    class Meta:
        db_table= 'db1'