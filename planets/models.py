from django.db import models


class Planet(models.Model):
    title = models.CharField(max_length=100)
    desc = models.TextField()
    img = models.ImageField(upload_to='planets/')
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title
