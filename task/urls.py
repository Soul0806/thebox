from django.urls import path
from . import views

app_name = 'task'
urlpatterns = [
  path('', views.index, name='index'),
  path('show/<str:item>', views.show_item, name='show_item'),
  # path('item/<str:item>', views.to_index, name='to_index'),
]