# Generated by Django 3.1.5 on 2021-06-22 07:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('colleges', '0002_auto_20210622_0914'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='city',
            field=models.CharField(max_length=200, verbose_name='Město'),
        ),
        migrations.AlterField(
            model_name='course',
            name='other_qualification_type',
            field=models.CharField(max_length=150, verbose_name='Typ ostatní kvalifikace'),
        ),
        migrations.AlterField(
            model_name='course',
            name='qualification_type',
            field=models.CharField(max_length=150, verbose_name='Typ kvalifikace'),
        ),
        migrations.AlterField(
            model_name='course',
            name='title',
            field=models.CharField(max_length=150, verbose_name='Titul'),
        ),
    ]
