# from . import views
# from django.urls import path

# urlpatterns = [
#     path('', views.index, name='index'),
# ]

from django.urls import path, include
from .routers import router

urlpatterns = [
    path('', include((router.urls, 'portfolio'), namespace='portfoli'))
]