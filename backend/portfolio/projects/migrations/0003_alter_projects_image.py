# Generated by Django 4.0.4 on 2022-05-21 03:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_projects_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='image',
            field=models.ImageField(upload_to='uploads/'),
        ),
    ]
