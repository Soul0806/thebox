from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('insert_category', views.insert_category, name='insert_category')
]