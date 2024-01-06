from django.contrib import admin

# Register your models here.
from .models import Game, GameResponse, CvcWord

admin.site.register(Game)
admin.site.register(GameResponse)
admin.site.register(CvcWord)
