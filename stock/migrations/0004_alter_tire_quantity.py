# Generated by Django 4.0 on 2022-01-23 07:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stock', '0003_tire_quantity'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tire',
            name='quantity',
            field=models.PositiveSmallIntegerField(null=True),
        ),
    ]
