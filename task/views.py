from django.http.response import HttpResponse
from django.shortcuts import render, resolve_url, redirect
from .form import SortModelForm
from django.urls import reverse
from django.http import HttpResponseRedirect
from .models import Sort
# Create your views here.


def index(request, item = ''):
  sort = Sort.objects.all()
  form = SortModelForm()
  if request.method == 'POST':
    # request.POST['order'] = 5;
    next_order = len(Sort.objects.all()) + 1
    sort = Sort(order = next_order)
    form = SortModelForm(request.POST, instance=sort)
    if form.is_valid():
      form.save()
      return HttpResponseRedirect(reverse('task:index'))
      
  
  return render(request, 'task/index.html', {
    'form' : form,
    'sort' : sort
  })

def show_item(request, item):
  return HttpResponse(item)

# def to_index(request, item):
#   return redirect('task:index')