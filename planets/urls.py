from django.urls import path
from . import views

urlpatterns = [
    path('api/planets/', views.planets_api, name='planets_api'),
]
