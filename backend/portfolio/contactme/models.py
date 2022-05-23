from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    email = models.EmailField(max_length=200, default="Let's have coffee!")
    message = models.TextField(max_length=5000)

    # def create(cls, name, company, email, message):
    #     self.name = name