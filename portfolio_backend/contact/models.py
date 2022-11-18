from django.db import models


class Messages(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    email = models.EmailField(null=False,blank=False)
    message = models.TextField()

    def __str__(self):
        return self.name
