from typing import Optional, Text
from django import forms
from django.forms import CharField, ModelForm, models, TextInput, NumberInput, Select
from django.utils.formats import number_format
from django.urls import reverse_lazy
from .models import Tire



class TireModelForm(ModelForm):

    class Meta:
        model = Tire        
        fields = ('spec', 'quantity', 'tire_inch')
        widgets = {
            "tire_inch": Select(attrs={
                "class": "select_inch" ,
                "data-url": reverse_lazy('stock:db_read_tire'),
                "data-tap": ".tire"
            })
        }
        labels = {
            'spec': '規格',
            'quantity': '數量',
            'tire_inch': '尺寸'
        }
