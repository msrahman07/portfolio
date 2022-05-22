from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
# Create your views here.
from .models import Experience, Task

def index(request):
    experiences = Experience.objects.values()
    return JsonResponse({"Experiences": list(experiences)})