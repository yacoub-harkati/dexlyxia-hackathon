from django.db import models

# Create your models here.

class Child(models.Model):
    nmae = models.CharField(max_length=100)
    birth_date = models.DateField()
    score = models.IntegerField()
    number_of_games = models.IntegerField(null=True, blank=True)

class ChildLevel(models.Model):
    child = models.ForeignKey(Child, on_delete=models.CASCADE)
    level = models.IntegerField()
    date = models.DateField()
