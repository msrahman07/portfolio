from rest_framework import routers
from .viewset import ContactViewSet
router = routers.SimpleRouter()
router.register(r'', ContactViewSet, basename='contact')