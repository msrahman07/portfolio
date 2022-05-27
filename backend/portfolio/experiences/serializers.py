from rest_framework import serializers
from .models import Experience

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ('id', 'number', 'position', 'company', 'date_range', 'description', 'tasks')

    # number = models.IntegerField(default=1)
    # position = models.CharField(max_length=200)
    # company = models.CharField(max_length=200)
    # date_range = models.CharField(max_length=200, default="", blank=True)
    # description = models.TextField(max_length=1000, blank=True)
    # tasks = models.TextField(max_length=5000, blank=True)
    