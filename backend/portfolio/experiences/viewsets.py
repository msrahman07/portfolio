from rest_framework import viewsets
from .serializers import ExperienceSerializer
from .models import Experience

class ExperienceViewSet(viewsets.ModelViewSet):
    serializer_class = ExperienceSerializer

    def get_queryset(self):
        return Experience.objects.all().order_by('number')