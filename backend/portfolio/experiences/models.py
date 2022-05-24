from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.postgres.forms import SimpleArrayField
# Create your models here.
class Experience(models.Model):
    position = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    description = models.TextField(max_length=1000, blank=True)
    tasks = models.TextField(max_length=5000, blank=True)
    # tasks = SimpleArrayField(models.CharField(max_length=200),delimiter='|')
    # tasks = ArrayField(models.CharField(max_length=200), delimiter='|', default=list)

class Task(models.Model):
    task = models.TextField(max_length=1000)
    position = models.ForeignKey(Experience, on_delete=models.CASCADE)