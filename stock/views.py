import csv
from os import kill
import re
import json 
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.core import serializers
# Create your views here.

from .models import Tire, TireInch
from .form import TireModelForm

def parse_csv_string(csv_string):
    lines = csv_string.splitlines()
    reader = csv.reader(lines)
    parsed_csv = list(reader)
    tire_dict = {}
    for row in parsed_csv:
        for key, item in enumerate(row):
            if len(item) >= 3 and re.findall(r'-', item):
                item  = re.sub(r'(\d+)[-|/](\d+)[-|/](\d+)', r'\1/\2-\3', item)    
                inch = item[-2:]
                num =  row[key+1] or 'null'
                spec_tuple = (item, num)
                if(tire_dict.get(inch) is None):
                    tire_dict[inch] = [spec_tuple]
                else:
                    tire_dict[inch].append(spec_tuple)

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
    inches = TireInch.objects.all()
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
    results = parse_csv_string(csv_string)
    return HttpResponse( json.dumps(results, indent=4) )


def insert_tire(request):
    csv_string = request.GET['csv'] 
    tire_dict = parse_csv_string(csv_string)
    for k, v_list in tire_dict.items():
        for v in v_list:   
            # ti = TireInch.objects.get(inch=k)
            t = Tire.objects.filter(spec=v[0]).update(quantity=v[1])
    return HttpResponse('ok')

def db_read_tire(request):
    inch_id = request.GET['inch_id']
    ti = TireInch.objects.get(pk=inch_id)
    tires = ti.tire_inch.all()
    res = serializers.serialize("json", tires)
    return HttpResponse(res, content_type="application/json" )


def f(request):
    t = Tire.objects.filter(quantity='null').update(quantity='0')
    return HttpResponse('ok')
