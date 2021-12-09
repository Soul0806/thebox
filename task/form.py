from django import forms
from django.forms import ModelForm, widgets, TextInput
from django.forms.widgets import Widget
from .models import Sort
from django.utils.translation import gettext_lazy as _

class SortModelForm(ModelForm):
  class Meta:
    model = Sort
    fields = ('item', )
    widgets = { 'item': TextInput(attrs=
      { 'class': 'input-item', 'autocomplete': 'off', 'placeholder': '以此新增'})}
      # { 'order': forms.HiddenInput()}
    