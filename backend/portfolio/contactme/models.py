from django.db import models
from datetime import datetime
# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    email = models.EmailField(max_length=200, default="Let's have coffee!")
    message = models.TextField(max_length=5000)
    date = models.DateField(default=datetime.now)
    
    def __str__(self):
        return self.name + " | " + self.email + " | " + self.date.strftime("%m/%d/%Y, %H:%M:%S")