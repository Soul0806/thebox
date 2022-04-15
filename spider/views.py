from django.shortcuts import render
from django.http import HttpResponse 
from .models import SearchForm
# Create your views here.

def index(request):
    search = SearchForm()
    return render(request, 'spider/index.html', {
        'search': search
    })
