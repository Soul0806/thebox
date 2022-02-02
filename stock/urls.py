from django.urls import path
from . import views

app_name = 'stock'
urlpatterns = [
    path('', views.index, name='index'),
    path('file', views.file, name='file'),    
    path('test', views.test, name='test'),    
    path('db_read_tire', views.db_read_tire, name='db_read_tire'),    
    path('insert_tire', views.insert_tire, name='insert_tire'),
    path('f', views.f, name='f')
]
