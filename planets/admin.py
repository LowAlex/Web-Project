from django.contrib import admin
from .models import Planet


@admin.register(Planet)
class PlanetAdmin(admin.ModelAdmin):
    list_display = ('order', 'title')
    ordering = ('order',)
