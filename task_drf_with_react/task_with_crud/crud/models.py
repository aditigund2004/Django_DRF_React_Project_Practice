from django.db import models
class Team(models.Model):
    no = models.CharField(max_length=10)
    name  = models.CharField(max_length=200)
    run = models.CharField(max_length=100)
    score = models.CharField(max_length=100)
    
    class Meta:
        db_table = "Team"