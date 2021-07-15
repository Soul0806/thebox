from django.shortcuts import render
from .models import Category
# Create your views here.

def index(request):
    category = Category.objects.all()
    return render(request, 'tools/index.html', {
      'items': category
    })