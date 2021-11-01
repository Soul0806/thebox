from django.shortcuts import render, resolve_url
from .form import SortModelForm
from django.urls import reverse
from django.http import HttpResponseRedirect
from .models import Sort
# Create your views here.


def index(request):
  sort = Sort.objects.all()
  form = SortModelForm()

  if request.method == 'POST':
    form = SortModelForm(request.POST)
    if form.is_valid():
      form.save()
      return HttpResponseRedirect(reserve='task:index')
      
  
  return render(request, 'task/index.html', {
    'form' : form,
    'sort' : sort

  })