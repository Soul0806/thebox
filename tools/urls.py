from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('insert_category', views.insert_category, name='insert_category'),
    path('insert_question', views.insert_question, name='insert_question'),
    path('select_question', views.select_question, name='select_question'),
    path('term_page', views.term_page, name='term_page'),
    path('test', views.test, name='test')
]