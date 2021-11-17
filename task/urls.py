from django.urls import path
from . import views

app_name = 'task'
urlpatterns = [
  path('', views.index, name='index'),
  path('show/<int:pk>', views.show_item, name='show_item'),
  path('delete_item', views.delete_item, name='delete_item'),
  path('insert_content', views.insert_content, name='insert_content'),

  # path('item/<str:item>', views.to_index, name='to_index'),
]