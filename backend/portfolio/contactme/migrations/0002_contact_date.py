# Generated by Django 4.0.4 on 2022-05-25 09:15

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contactme', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='date',
            field=models.DateField(default=datetime.datetime.now),
        ),
    ]