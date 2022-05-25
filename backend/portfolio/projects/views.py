from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProjectsSerializer

# Create your views here.
from django.http import HttpResponse, JsonResponse
from .models import Projects

def index(request):
    serializer_class = ProjectsSerializer
    projects = Projects.objects.values().order_by('number')
    # print(projects)
    return JsonResponse({"Projects": list(projects)})