from django.urls import path
from . import views

app_name = 'stock'
urlpatterns = [
    path('', views.index, name='index'),
    path('file', views.file, name='file'),    
    path('test', views.test, name='test'),    
]
