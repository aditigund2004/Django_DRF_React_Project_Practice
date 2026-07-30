from django.db import models

# Create your models here.

class Product_Info(models.Model):
    name = models.CharField(max_length=200)
    price = models.IntegerField()
    category =models.CharField(max_length=200)
    quantity = models.IntegerField()
    
    
    class Meta:
        db_table = 'product'

    def __str__(self):
        return self.name