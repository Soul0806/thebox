import csv
import re
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
# Create your views here.

from .models import Tire, TireInch
from .form import TireModelForm


def index(request):
    if(request.method == "POST"):
        form = TireModelForm(request.POST)
        if(form.is_valid()):
            form.save()
        return HttpResponseRedirect(reverse('stock:index'))
    inches = TireInch.objects.values_list('inch', flat=True)
    tires = Tire.objects.all()
    form = TireModelForm()
    return render(request, 'stock/index.html', {
        'inches': inches,
        'tires': tires,
        'form': form
    })

def file(request):
    return render(request, 'stock/file.html')
