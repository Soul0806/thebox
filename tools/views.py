import json
from typing import AnyStr
from django.http.response import HttpResponse
from django.shortcuts import render
from .models import Category, Question
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
        c_instance = Category.objects.create(tag=tag)
      return HttpResponse('ok')

def insert_question(request):
    if(request.method == 'POST'):
      q = Question.objects.create(questions=request.POST['question'], answers=request.POST['answer'].replace('\n', '<br>'))
      tags = request.POST['tag'].split(',')
      for t in tags: 
        c = Category.objects.get(tag=t.strip())
        q.categorys.add(c.id)
    return HttpResponse('ok')

def term_page(request):
    if(request.method == 'GET'):
      term = request.GET['term']
      if(term != 'default'):
        c = Category.objects.get(tag=term)
        q_collects = c.category.all()

      return render(request, 'tools/term_page.html', {
        'term': term,
        'q_collects': q_collects
      })