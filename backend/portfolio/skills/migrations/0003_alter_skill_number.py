# Generated by Django 4.0.4 on 2022-05-25 03:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skills', '0002_skill_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skill',
            name='number',
            field=models.IntegerField(default=1),
        ),
    ]
