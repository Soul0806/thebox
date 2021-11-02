from django.contrib import admin

# Register your models here.

from .models import Category, Question

# class RatingAdmin(admin.ModelAdmin):
#     readonly_fields = ('date',)
admin.site.register(Category)
admin.site.register(Question)