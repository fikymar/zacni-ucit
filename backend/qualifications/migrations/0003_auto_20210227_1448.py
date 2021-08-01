# Generated by Django 3.1.5 on 2021-02-27 13:48

import common.models
from django.db import migrations, models
import django.db.models.deletion
import django_extensions.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('qualifications', '0002_auto_20210221_1933'),
    ]

    operations = [
        migrations.CreateModel(
            name='EducationArea',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('name', models.CharField(max_length=512, unique=True, verbose_name='Název')),
            ],
            options={
                'verbose_name': 'Oblast VŠ vzdělávání 2',
                'verbose_name_plural': 'Oblasti VŠ vzdělávání 2',
                'ordering': ('name',),
            },
            bases=(models.Model, common.models.GraphModel),
        ),
        migrations.CreateModel(
            name='PreparationType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('name', models.CharField(max_length=200, unique=True, verbose_name='Název')),
            ],
            options={
                'verbose_name': 'Typ přípravy učitelů',
                'verbose_name_plural': 'Typy příprav učitelů',
                'ordering': ('name',),
            },
            bases=(models.Model, common.models.GraphModel),
        ),
        migrations.CreateModel(
            name='SubjectType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('name', models.CharField(max_length=512, unique=True, verbose_name='Název')),
            ],
            options={
                'verbose_name': 'Typ předmětů',
                'verbose_name_plural': 'Typy předmětů',
                'ordering': ('name',),
            },
            bases=(models.Model, common.models.GraphModel),
        ),
        migrations.RemoveField(
            model_name='educationtype',
            name='subjects_type',
        ),
        migrations.AlterField(
            model_name='educationtype',
            name='title',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='qualifications.title', verbose_name='Titul'),
        ),
        migrations.AddField(
            model_name='educationtype',
            name='subject_type',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='qualifications.subjecttype', verbose_name='Typ předmětů'),
        ),
        migrations.AlterField(
            model_name='educationtype',
            name='area',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='qualifications.educationarea', verbose_name='Oblast VŠ vzdělávání'),
        ),
    ]
