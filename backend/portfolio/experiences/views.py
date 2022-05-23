from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
# Create your views here.
from django.core import serializers
from .models import Experience, Task

def index(request):
    experiences = Experience.objects.values()
    return JsonResponse({"Experiences": list(experiences)})

def get_tasks(request, exp_id):
    experience = get_object_or_404(Experience, pk=exp_id)
    task = experience.task_set.all().values()
    return JsonResponse({"Tasks": list(task)})