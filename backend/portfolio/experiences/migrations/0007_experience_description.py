# Generated by Django 4.0.4 on 2022-05-24 02:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('experiences', '0006_experience_tasks'),
    ]

    operations = [
        migrations.AddField(
            model_name='experience',
            name='description',
            field=models.TextField(blank=True, max_length=1000),
        ),
    ]
