# MTC-GT-Website

## To create a virtual environment:
python -m venv env
source env/bin/activate  # On Windows, use `env\Scripts\activate`

## Install Django and Django REST Framework:
pip install django djangorestframework

## Settings.py has been configured:
INSTALLED_APPS = [
    ...
    'rest_framework',
    'corsheaders',
    ...
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    ...
]

# Allow requests from localhost (React app)
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]

## Run the Django development server:
python manage.py runserver
