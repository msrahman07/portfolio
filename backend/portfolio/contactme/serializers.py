from rest_framework import serializers
from datetime import datetime
from .models import Contact
from django.utils import timezone
class ContactSerializer(serializers.ModelSerializer):
    # date = serializers.DateField(default=datetime.today)
    class Meta:
        model = Contact
        fields = ('id', 'name', 'company', 'email', 'message')

    # name = models.CharField(max_length=200)
    # company = models.CharField(max_length=200)
    # email = models.EmailField(max_length=200, default="Let's have coffee!")
    # message = models.TextField(max_length=5000)
    # date = models.DateField(default=datetime.now)
    