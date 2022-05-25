from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from .models import Skill
# Create your views here.

def index(request):
    skills = Skill.objects.values().order_by('number')
    return JsonResponse({"Skills": list(skills)})