import json
from django.http.response import HttpResponse
from django.shortcuts import render
from .models import Category
# Create your views here.

def index(request):
    category = Category.objects.all()
    return render(request, 'tools/index.html', {
      'items': category
    })

def insert_category(request):
    if(request.method == 'GET'):
      tags = json.loads(request.GET['tag'])
      for tag in tags:
        print(tag)
        # c_instance = Category.objects.create(tag=tag)
      return HttpResponse('ok')