from django.db import models

# Create your models here.
class FDA(models.Model):
    customerName = models.CharField(max_length=100)
    quntity = models.IntegerField()
    status = models.CharField(max_length=100)
    foodistem =models.CharField(max_length=100)
    price = models.IntegerField()
    paymentmode = models.CharField(max_length=100) 
    
    class Meta:
        db_table = 'FDA'