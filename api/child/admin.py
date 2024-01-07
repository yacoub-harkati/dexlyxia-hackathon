from django.contrib import admin

# Register your models here.
from .models import Child, ChildLevel
admin.site.register(Child)
admin.site.register(ChildLevel)
