from django.shortcuts import render
from django.core.mail import send_mail
from django.contrib.auth.models import User

# Create your views here.
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import TokenError
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.response import Response

from django.core.exceptions import ObjectDoesNotExist


class LogoutView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_200_OK)
        except (ObjectDoesNotExist, TokenError):
            return Response(status=status.HTTP_400_BAD_REQUEST)


class NotificationManager:
    def spending_limit_email(self, user: User):
        subject = "Approaching spending limit!"
        message = "You are approaching your weekly spending limit"
        from_email = "ucache@example.com"

        send_mail(subject, message, from_email, [user.email])
