from django import forms
from django.forms import widgets
from django.forms.widgets import Widget
from .models import Sort

class SortModelForm(forms.ModelForm):
  class Meta:
    model = Sort
    fields = ('item', )
    widgets = { 'item': forms.TextInput(attrs={ 'class': 'input-item'})}
        # { 'order': forms.HiddenInput()}
    