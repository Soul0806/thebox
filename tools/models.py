from django.db import models

# Create your models here.

class Category(models.Model):
    tag = models.CharField(max_length=32)

    def __str__(self):
      return self.tag