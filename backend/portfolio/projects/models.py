from django.db import models

# Create your models here.

class Projects(models.Model):
    image = models.ImageField(upload_to ='uploads/% Y/% m/% d/')
    project_name = models.CharField(max_length=200)
    details = models.TextField()

    def __str__(self):
        return self.project_name