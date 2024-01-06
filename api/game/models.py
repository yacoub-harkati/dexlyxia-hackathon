from django.db import models
from child.models import Child

# Create your models here.
class Game(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    points = models.IntegerField()
    def __str__(self):
        return self.name


class GameResponse(models.Model):
    child = models.ForeignKey(Child, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    response_time = models.IntegerField()
    response = models.CharField(max_length=100, null=True)
    expected_response = models.CharField(max_length=100, null=True)
    difficulty = models.IntegerField(null=True)
    is_correct = models.BooleanField(null=True)

class CvcWord(models.Model):
    word = models.CharField(max_length=100)
    image = models.ImageField(upload_to='media/cvc_words')
    group = models.IntegerField()
    difficulty = models.IntegerField()
    def __str__(self):
        return self.word
