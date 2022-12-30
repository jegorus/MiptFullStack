from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_post_process, name="get_post_process"),
    path('', views.put_delete_process, name="put_delete_process"),
]
