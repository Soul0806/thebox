from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('insert_category', views.insert_category, name='insert_category'),
    path('insert_question', views.insert_question, name='insert_question'),
    path('term_page', views.term_page, name='term_page')
]