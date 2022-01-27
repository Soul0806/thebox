import csv
import re
from django.core.files.utils import FileProxyMixin
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
# Create your views here.

from .models import Tire, TireInch
from .form import TireModelForm

def parse_csv_string(csv_string):
    lines = csv_string.splitlines()
    reader = csv.reader(lines)
    parsed_csv = list(reader)
    tire_dict = {}
    for row in parsed_csv:
        print(row)
        for item in row:
            if len(item) >= 3 and re.findall(r'-', item):
                inch = item[-2:]
                if(tire_dict.get(inch) is None):
                    tire_dict[inch] = [item]
                else:
                    tire_dict[inch].append(item)

    # tire_dict = {}

    # tires_key = sorted(list(tires.keys()), reverse=True)
    # for index, key in enumerate(tires_key):
    #     tire_dict[key] = tires[key]
    
    return tire_dict

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
    return render(request, 'stock/file.html', {
    })

def test(request):
    csv_string = request.GET['csv']
    tire_dict = parse_csv_string(csv_string)
    return HttpResponse(tire_dict)

