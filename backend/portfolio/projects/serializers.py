from rest_framework import serializers
from .models import Projects

class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ('id', 'number', 'image', 'project_name', 'demo_link', 'github_url', 'tech_stack', 'details', 'tasks')

    # number = models.IntegerField(default=1)
    # image = models.ImageField(upload_to ='static/images/')
    # project_name = models.CharField(max_length=200)
    # demo_link = models.URLField(max_length=300, default='', blank=True)
    # github_url = models.URLField(max_length=300, default='', blank=True)
    # tech_stack = models.CharField(max_length=500, default='blank')
    # details = models.TextField()
    # tasks = models.TextField(default='', blank=True)
