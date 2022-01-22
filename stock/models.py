from django.db import models

# Create your models here.


class Inch(models.Model):
    inch = models.CharField(max_length=64)
    created_at = models.DateTimeField(auto_now=True)
    modified_at = models.DateTimeField(auto_now=True)
