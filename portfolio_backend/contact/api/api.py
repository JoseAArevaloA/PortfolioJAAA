from rest_framework.views import APIView
from portfolio_backend.contact.api.serializers import MessagesSerializer
from portfolio_backend.contact.models import Messages
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST', 'GET'])
def contact_api_view(request):
    if request.method == 'GET':
        messages = Messages.objects.all()
        messages_serializer= MessagesSerializer(messages, many= True)
        return Response (messages_serializer.data)
    
    if request.method == 'POST':
        messages_serializer= MessagesSerializer(data = request.data)
        if messages_serializer.is_valid():
            messages_serializer.save()
        return Response (messages_serializer.data)
    return  Response (messages_serializer.errors)
