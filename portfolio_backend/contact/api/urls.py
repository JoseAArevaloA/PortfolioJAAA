from django.urls import path
from portfolio_backend.contact.api.api import contact_api_view

urlpatterns = [
    path('contact/', contact_api_view, name='contact')
]
