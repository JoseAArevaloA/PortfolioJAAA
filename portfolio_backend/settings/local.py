from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'Portfolio',
        'CLIENT': {
            'host': 'localhost',
            'port': 27017,
            'username': 'superadmin',
            'password': "admin1234",
            'authSource': 'Portfolio',
            'authMechanism': 'SCRAM-SHA-1',
        }
    }
}

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
]
# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-l=53@p&8k6=lq39+s(z@tk3zh8fmnyk4@_@cs^h+gm9dz9165)'

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = 'static/'