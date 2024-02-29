from django.urls import path
from .views import *

urlpatterns = [
    path("login/", login, name="login"),
    path("signup/", signup, name="signup"),
    path("reset-pass/", reset_password, name="reset_password"),
    path("logout/", logout, name="logout"),
]
