from django.db import models
from django.db.models.fields import CharField, TextField
# Create your models here.

class Sort(models.Model): 
  item = models.CharField(max_length=64)
  created_at = models.DateTimeField(auto_now_add=True)
  modified_at = models.DateTimeField(auto_now=True)