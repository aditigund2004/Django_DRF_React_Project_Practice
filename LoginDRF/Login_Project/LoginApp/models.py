from django.db import models

# Create your models here.

class Login(models.Model):
    name=models.CharField(max_length=50)
    email=models.CharField(max_length=50)
    mobile=models.BigIntegerField()
    password=models.CharField(max_length=50)
    role=models.CharField(max_length=50)

    class Meta:
        db_table="Login_Table"