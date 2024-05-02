"""#from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.

def alunos(request):
    if request.method=='GET':
        aluno = {'id':1, 'nome':'israel'}
        return JsonResponse(aluno)"""

#Como eu quero que faça
from django.shortcuts import render

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    # Autenticar o usuário
    user = authenticate(username=username, password=password)
    if user is not None:
        # Gerar ou recuperar token de acesso
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})
    else:
        return Response({'error': 'Credenciais inválidas'}, status=status.HTTP_400_BAD_REQUEST)
