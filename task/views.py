from django.http.response import HttpResponse
from django.shortcuts import render, resolve_url, redirect
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.template.loader import render_to_string
from .form import SortModelForm
from .models import Sort
# Create your views here.


def index(request, item = ''):
  sort = Sort.objects.all()
  default_item = sort.first().item
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
    'sort' : sort,
    'default': sort.first()
  })

def show_item(request, pk):
  sort = Sort.objects.get(pk=pk)
  return render(request, 'task/section.html', {
    'sort': sort
  })

def delete_item(request):
  pk = request.GET['pk']
  Sort.objects.get(pk=pk).delete()
  return HttpResponse(f'Delete {pk}')

def insert_content(request):
  sort = Sort.objects.get(pk=request.POST['pk'])
  sort.detail = request.POST['html']
  sort.save()
  return HttpResponse(sort)
  # print(request.POST)
  
  

# def to_index(request, item):
#   return redirect('task:index')