from django.db import models

# Create your models here.

class Child(models.Model):
    nmae = models.CharField(max_length=100)
    birth_date = models.DateField()
    score = models.IntegerField()
