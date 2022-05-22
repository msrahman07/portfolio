from django.db import models

# Create your models here.
class Experience(models.Model):
    position = models.CharField(max_length=200)
    company = models.CharField(max_length=200)

class Task(models.Model):
    task = models.TextField(max_length=1000)
    position = models.ForeignKey(Experience, on_delete=models.CASCADE)