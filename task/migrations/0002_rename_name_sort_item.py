# Generated by Django 3.2.5 on 2021-11-03 06:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='sort',
            old_name='name',
            new_name='item',
        ),
    ]
