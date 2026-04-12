from django.http import JsonResponse
from django.shortcuts import render
from .models import Planet


def index(request):
    return render(request, 'index.html')


def planets_api(request):
    planets = list(Planet.objects.values('title', 'desc', 'img'))
    return JsonResponse(planets, safe=False)
