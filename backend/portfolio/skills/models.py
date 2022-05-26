from django.db import models

# Create your models here.

class Skill(models.Model):
    number = models.IntegerField(default=1)
    logo = models.ImageField(upload_to ='static/logos/')
    skill_name = models.CharField(max_length=200)

    def __str__(self):
        return self.skill_name