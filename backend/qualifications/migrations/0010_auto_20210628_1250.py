# Generated by Django 3.1.5 on 2021-06-28 10:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('qualifications', '0009_auto_20210628_1248'),
    ]

    operations = [
        migrations.AlterField(
            model_name='qualification',
            name='example',
            field=models.TextField(verbose_name='Příklad'),
        ),
        migrations.AlterField(
            model_name='qualification',
            name='note',
            field=models.TextField(null=True, verbose_name='Poznámka'),
        ),
    ]