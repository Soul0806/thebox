from enum import auto
from django.db import models
from django.db.models.fields.related import create_many_to_many_intermediary_model

# Create your models here.

TIRE_CHOICES = [('null', 'null')]
for n in range(20):
    TIRE_CHOICES.append((n, n))
tuple(TIRE_CHOICES)

class TireManager(models.Manager):
    def create_inch(self, inch):
        obj = self.create(inch=inch)
        return obj


class TireInch(models.Model):
    class Meta:
        ordering = ['inch']
    inch = models.CharField(max_length=64)
    created_at = models.DateTimeField(auto_now=True)
    modified_at = models.DateTimeField(auto_now=True)

    objects = TireManager()

    def __str__(self):
        return self.inch

class Tire(models.Model):
    class Meta:
        ordering = ('spec',)
    spec = models.CharField(max_length=64)
    tire_inch = models.ForeignKey(
        TireInch, on_delete=models.CASCADE, related_name='tire_inch')
    quantity = models.CharField(max_length=4, choices=TIRE_CHOICES, default="null", null=True)
    # quantity = models.PositiveSmallIntegerField(null=True)
    created_at = models.DateTimeField(auto_now=True)
    modified_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.spec}'

class Recent(models.Model):
    tire_spec = models.ForeignKey(Tire, on_delete=models.CASCADE, related_name='tire_spec')
    before = models.IntegerField()
    after = models.IntegerField()
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.tire_spec} 前: {self.before} 後: {self.after}'