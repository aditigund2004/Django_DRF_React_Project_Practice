from django.db import models

# Create your models here.
class Model(models.Model):
    PolicyId = models.IntegerField()
    PolicyNumber = models.CharField(max_length=100)
    PolicyHolderName = models.CharField(max_length=100)
    PolicyType = models.CharField(max_length=100)
    PremiumAmount = models.IntegerField()
    CoverageAmount = models.IntegerField()
    Status = models.CharField(max_length=100)
    
    class Meta:
        db_table= 'task'