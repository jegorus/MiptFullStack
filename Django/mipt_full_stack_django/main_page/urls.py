from django.urls import path
from . import views

appname = "main_page"

urlpatterns = [
    path('sign_in', views.authorization, name="authorization"),
    path('sign_up', views.registration, name="registration"),
    path('<str:username>', views.home_page, name="home_page"),
]
