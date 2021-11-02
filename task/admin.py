from django.contrib import admin

# Register your models here.

from .models import Sort

admin.site.site_url = "/task"
admin.site.register(Sort)