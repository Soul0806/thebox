from django.contrib import admin

# Register your models here.

from .models import TireInch, Tire

admin.site.site_url = '/stock'
admin.site.register(TireInch)
admin.site.register(Tire)
