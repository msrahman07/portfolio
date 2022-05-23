from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:exp_id>', views.get_tasks, name='get_tasks')
]