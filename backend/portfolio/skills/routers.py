from rest_framework import routers
from .viewset import SkillViewSet
router = routers.SimpleRouter()
router.register(r'', SkillViewSet, basename='skill')