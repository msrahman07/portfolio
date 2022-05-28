from rest_framework import serializers
from .models import Skill

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('id', 'number', 'skill_name')

    # number = models.IntegerField(default=1)
    # logo = models.ImageField(upload_to ='static/logos/')
    # skill_name = models.CharField(max_length=200)
