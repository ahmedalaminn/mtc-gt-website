from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .serializers import ContactFormSerializer, PaymentIntentSerializer
import stripe

stripe.api_key = settings.STRIPE_SECRET_KEY

# Create your views here.

class ContactFormView(APIView):
    def post(self, request):
        serializer = ContactFormSerializer(data=request.data)
        if serializer.is_valid():
            # Get validated data
            name = serializer.validated_data['name']
            email = serializer.validated_data['email']
            subject = serializer.validated_data['subject']
            message = serializer.validated_data['message']
            
            # Compose email message
            email_message = f"""
            New contact form submission from {name}
            
            From: {email}
            Subject: {subject}
            
            Message:
            {message}
            """
            
            try:
                # Send email
                send_mail(
                    subject=f"Contact Form: {subject}",
                    message=email_message,
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.CONTACT_EMAIL],
                    fail_silently=False,
                )
                return Response(
                    {"message": "Your message has been sent successfully!"},
                    status=status.HTTP_200_OK
                )
            except Exception as e:
                return Response(
                    {"error": "Failed to send email. Please try again later."},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CreatePaymentIntentView(APIView):
    def post(self, request):
        serializer = PaymentIntentSerializer(data=request.data)
        if serializer.is_valid():
            try:
                # Create a PaymentIntent with the order amount and currency
                payment_intent = stripe.PaymentIntent.create(
                    amount=serializer.validated_data['amount'],
                    currency=serializer.validated_data['currency'],
                    payment_method_types=serializer.validated_data['payment_method_types'],
                    metadata={'integration_check': 'accept_a_payment'}
                )
                
                return Response({
                    'clientSecret': payment_intent.client_secret
                })
            except Exception as e:
                return Response(
                    {'error': str(e)},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StripeWebhookView(APIView):
    def post(self, request):
        payload = request.body
        sig_header = request.META.get('HTTP_STRIPE_SIGNATURE')

        try:
            event = stripe.Webhook.construct_event(
                payload, sig_header, settings.STRIPE_WEBHOOK_SECRET
            )
        except ValueError as e:
            return Response({'error': 'Invalid payload'}, 
                          status=status.HTTP_400_BAD_REQUEST)
        except stripe.error.SignatureVerificationError as e:
            return Response({'error': 'Invalid signature'}, 
                          status=status.HTTP_400_BAD_REQUEST)

        # Handle the event
        if event.type == 'payment_intent.succeeded':
            payment_intent = event.data.object
            # Handle successful payment here
            print(f"Payment succeeded for amount: {payment_intent.amount}")
        
        return Response({'status': 'success'})
