from rest_framework import viewsets
from .models import Skill
from .serializers import SkillSerializer

class SkillViewSet(viewsets.ModelViewSet):
    serializer_class = SkillSerializer

    def get_queryset(self):
        return Skill.objects.all().order_by('number')