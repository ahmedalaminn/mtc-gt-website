# MTC-GT-Website - Backend

## To create a virtual environment:
```bash
python3 -m venv env
source env/bin/activate  # On Windows, use `env\Scripts\activate`
```

## Install Django and Django REST Framework:
```bash
pip3 install django djangorestframework
```

## Settings.py has been configured:
```python
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
```

## Run the Django development server:
```bash
python3 manage.py runserver
```
