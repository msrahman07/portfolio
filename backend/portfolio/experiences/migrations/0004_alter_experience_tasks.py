# Generated by Django 4.0.4 on 2022-05-24 01:59

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('experiences', '0003_alter_experience_tasks'),
    ]

    operations = [
        migrations.AlterField(
            model_name='experience',
            name='tasks',
            field=django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=200), size=None), default=list, size=None),
        ),
    ]
