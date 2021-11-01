from django import forms
from django.forms import widgets
from django.forms.widgets import Widget
from .models import Sort

class SortModelForm(forms.ModelForm):
  class Meta:
    model = Sort
    fields = ('name',)
    widgets = { 'name': forms.TextInput(attrs={ 'class': 'sort'})}