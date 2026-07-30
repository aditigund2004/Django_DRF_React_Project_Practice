from django.db import models

# Create your models here.


class ModelTask(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    
    
    class Meta:
        db_table = 'emp'