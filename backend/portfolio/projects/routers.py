from rest_framework import routers
from .viewsets import ProjectViewSet
router = routers.SimpleRouter()
router.register(r'', ProjectViewSet, basename='projects')