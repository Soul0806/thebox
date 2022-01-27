from typing import Optional
from django import forms
from django.forms import ModelForm, models, TextInput, NumberInput, ChoiceField
from django.utils.formats import number_format
from .models import Tire


class TireModelForm(ModelForm):
    class Meta:
        model = Tire
        fields = ('spec', 'quantity', 'tire_inch')
        # widgets = {'tire_inch ': TextInput }
        labels = {
            'spec': '規格',
            'quantity': '數量',
            'tire_inch': '尺寸'
        }
