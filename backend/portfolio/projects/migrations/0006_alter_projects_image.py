# Generated by Django 4.0.4 on 2022-05-22 01:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0005_alter_projects_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='image',
            field=models.ImageField(upload_to='static/images/'),
        ),
    ]