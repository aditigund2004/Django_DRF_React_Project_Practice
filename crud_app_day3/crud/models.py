from django.db import models

# Create your models here.


class ModelTask(models.Model):
    name = models.CharField(max_length=10)
    age = models.IntegerField()
    
    class Meta:
        db_table = 'task'
        
