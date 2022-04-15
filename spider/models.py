from django.db import models
from django.forms import ModelForm

# Create your models here.

class Search(models.Model):
    q = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now=True)
    modified_at = models.DateTimeField(auto_now_add=True)

class SearchForm(ModelForm):
    class Meta:
        model = Search
        fields = ['q']
        labels = {
            'q': '搜尋'
        }