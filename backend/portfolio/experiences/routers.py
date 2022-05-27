from rest_framework import routers
from .viewsets import ExperienceViewSet
router = routers.SimpleRouter()
router.register(r'', ExperienceViewSet, basename='experience')