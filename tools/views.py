import json
import re
from typing import AnyStr, KeysView
from django.http.response import HttpResponse
from django.shortcuts import render
from django.db.models import Q
from .models import Category, Question
# Create your views here.

def list_append(list, val):
  list.append(val)
  return list

def link_repl(obj):
  aaa = 'answers'
  for q in obj: 
    q.answers = re.sub(r'(http|https)://.+(?=<br>)?', repl, q.answers)    

def repl(m): 
  match = m.group(0)
  return f'<a href="{match}">{match}</a>'

def test(request):
  str = 'https://localhost:8000/test<br>123'
  result = re.sub(r'(http|https)://.+(?=<br>)', repl, str)
  # result = 123
  return render(request, 'test/test.html', {
    "aaa": result
  })

# def index(request):
#     category = Category.objects.all()
#     return render(request, 'tools/index.html', {
#       'categorys': category
#     })

def index(request):
    q_collects = Question.objects.all()
    c_collects = Category.objects.all()
    collects = {}
    for q in q_collects: 
      q.answers = re.sub(r'(http|https)://.+(?=<br>)?', repl, q.answers)
      for term in q.categorys.all():
        collects[term] = [q] if term not in collects else list_append(collects[term], q)
    return render(request, 'tools/index.html', {
      "collects": collects.items(),
      "categorys": c_collects
    })

def insert_category(request):
    if(request.method == 'GET'):
      term = request.GET['term'].strip()
      c_instance = Category.objects.create(terms=term)
      return HttpResponse(c_instance)

def insert_question(request):
    if(request.method == 'POST'):
      print(request.POST)
      q = Question.objects.create(questions=request.POST['questions'], answers=request.POST['answers'].replace('\n', '<br>'))
      tags = request.POST['tags'].split(',')
      for t in tags: 
        c = Category.objects.get(terms=t.strip())
        q.categorys.add(c.id)
    return HttpResponse('ok')

def term_page(request):
    if(request.method == 'GET'):
      term = request.GET['term']
      if(term != 'default'):
        c = Category.objects.get(terms=term)
        q_collects = c.category.all()
        link_repl(q_collects)
        return render(request, 'tools/term_page.html', {
          'term': term,
          'q_collects': q_collects
        })

      return HttpResponse('default')

def select_question(request):
  if(request.method == 'GET'):  
    search = request.GET['search'];
    q_collects = \
      Question.objects.filter(Q(questions__contains=search) | Q(answers__contains=search))
    collects = {}
    for q in q_collects: 
      q.answers = re.sub(r'(http|https)://.+(?=<br>)?', repl, q.answers)
      for term in q.categorys.all():
        collects[term] = [q] if term not in collects else list_append(collects[term], q)
    return render(request, 'tools/default/knowledge_main.html', {
      "collects": collects.items()
    })