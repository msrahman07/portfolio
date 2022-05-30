# from django.urls import path

# from . import views

from django.conf import settings
from django.conf.urls.static import static

# urlpatterns = [
#     path('', views.index, name='index'),
# ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

from django.contrib import admin
from django.urls import path, include
from .routers import router

urlpatterns = [
    path('', include((router.urls, 'portfolio'), namespace='portfolio')),
] 
# + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

