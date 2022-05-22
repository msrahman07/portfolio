from django.db import models

# Create your models here.

class Skill(models.Model):
    logo = models.ImageField(upload_to ='static/logos/')
    skill_name = models.CharField(max_length=200)
