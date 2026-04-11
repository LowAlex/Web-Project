from django.http import JsonResponse
from .models import Planet


def planets_api(request):
    planets = list(Planet.objects.values('title', 'desc', 'img'))
    return JsonResponse(planets, safe=False)
