from typing import cast
from django.db import models
from django.db.models.deletion import CASCADE
from django.db.models.fields import CharField, TextField, IntegerField
# Create your models here.

class Sort(models.Model): 
  item = models.CharField(max_length=64)
  detail = models.TextField(null=True)
  order = models.IntegerField()
  created_at = models.DateTimeField(auto_now_add=True)
  modified_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return f'{self.item}({self.order})'

# class Detail(models.Model):
#   sorts = models.ForeignKey(Sort, on_delete=models.CASCADE, related_name="sort")
#   content = models.TextField()
#   created_at = models.DateTimeField(auto_now_add=True)
#   modified_at = models.DateTimeField(auto_now=True)