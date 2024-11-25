from rest_framework import serializers

class ContactFormSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    subject = serializers.CharField(max_length=200)
    message = serializers.CharField()

class PaymentIntentSerializer(serializers.Serializer):
    amount = serializers.IntegerField()
    currency = serializers.CharField(max_length=3)
    payment_method_types = serializers.ListField(child=serializers.CharField(), default=['card']) 