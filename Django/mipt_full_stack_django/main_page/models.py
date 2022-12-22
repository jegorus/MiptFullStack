from django.db import models


class User(models.Model):
    username = models.CharField(max_length=24)
    password = models.CharField(max_length=24)

    def __str__(self):
        return self.username
