# Generated by Django 4.0.4 on 2022-05-25 03:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0009_projects_demo_link_projects_github_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='number',
            field=models.IntegerField(default=1, max_length=200),
        ),
    ]