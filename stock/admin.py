from django.contrib import admin

# Register your models here.

from .models import TireInch, Tire, Recent

admin.site.site_url = '/stock'
admin.site.register(TireInch)
admin.site.register(Tire)
admin.site.register(Recent)
