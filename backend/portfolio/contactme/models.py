from django.db import models
from datetime import datetime
from django.utils import timezone
# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=200)
    company = models.CharField(max_length=200, blank=True)
    email = models.EmailField(max_length=200)
    message = models.TextField(max_length=5000, default="Let's have coffee!", blank=True)
    # date = models.DateField(timezone.now())
    
    def __str__(self):
        return self.name + " | " + self.email + " | " #+ self.date.strftime("%m/%d/%Y, %H:%M:%S")