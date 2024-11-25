from django.urls import path
from .views import CreatePaymentIntentView, StripeWebhookView, ContactFormView

urlpatterns = [
    path('create-payment-intent/', CreatePaymentIntentView.as_view(), name='create-payment-intent'),
    path('webhook/stripe/', StripeWebhookView.as_view(), name='stripe-webhook'),
    path('contact/', ContactFormView.as_view(), name='contact-form'),
]
