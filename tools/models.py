from django.contrib.admin.sites import AdminSite
from django.db import models
from django.db.models.base import Model
from django.db.models.fields import CharField, TextField
from django.db.models.fields.related import ManyToManyField

# Create your models here.

class Category(models.Model):
    tag = models.CharField(max_length=32)

    def __str__(self):
      return self.tag

class Question(models.Model):
    questions = models.CharField(max_length=256)
    answers = models.TextField(blank=True)
    categorys = ManyToManyField(Category, related_name='category')
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)