from django.db import models

# Create your models here.
class Model(models.Model):
    username = models.CharField(max_length=100)
    total_amount = models.IntegerField()
    upi_id = models.IntegerField()
    money = models.IntegerField()
    bank_name = models.CharField(max_length=100)
    pin = models.IntegerField()
    paid_to = models.CharField(max_length=100)
    
    class Meta:
        db_table = 'bank'
    