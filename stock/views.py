import csv
from os import kill
import re
import json
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
        for item in row:
            if len(item) >= 3 and re.findall(r'-', item):
                item  = re.sub(r'(\d+)[-|/](\d+)[-|/](\d+)', r'\1/\2-\3', item)    
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
        "inches": inches,
        "tires": tires,
        "form": form
    })

# stock/file
def file(request):
    return render(request, 'stock/file.html', {
    })

def test(request):
    csv_string = request.GET['csv']
    result = parse_csv_string(csv_string)
    return HttpResponse( json.dumps(result, indent=4) )
    # tire_dict = parse_csv_string(csv_string)
    # return HttpResponse(tire_dict)


def insert_tire(request):
    csv_string = request.GET['csv']
    tire_dict = parse_csv_string(csv_string)
    for k, v_list in tire_dict.items():
        for v in v_list:   
            ti = TireInch.objects.get(inch=k)
            t = Tire.objects.create(spec=v, tire_inch=ti, quantity="null")

        print(k, v)

    return HttpResponse('ok')
