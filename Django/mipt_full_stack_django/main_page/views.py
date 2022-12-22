from django.http import Http404
from django.shortcuts import render
from django.shortcuts import redirect

from .models import User


def authorization(request):
    if request.method == "POST":
        username = request.POST.get('name')
        password = request.POST.get('password')

        if 'registrate_button' in request.POST:
            return redirect(registration)
        if username == "" or password == "":
            return render(request, 'main_page/authorization.html')
        try:
            user = User.objects.get(username=username, password=password)

        except:
            return render(request, 'main_page/authorization.html', {'error': "неверный логин или пароль"})

        return redirect(home_page, username)

    return render(request, 'main_page/authorization.html')


def registration(request):

    if request.method == "POST":
        username = request.POST.get('name')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')

        if 'log_in_button' in request.POST:
            return redirect(authorization)
        if password != confirm_password:
            return render(request, 'main_page/registration.html', {'error': "пароли не совпадают"})

        if User.objects.filter(username=username).count() > 0:
            return render(request, 'main_page/registration.html', {'error': "Пользователь существует"})

        if username != "" and password != "":
            User.objects.create(username=username, password=password)

    return render(request, 'main_page/registration.html')


def home_page(request, username):
    try:
        user = User.objects.get(username=username)

    except:
        raise Http404("Пользователь не найден")

    return render(request, "main_page/home_page.html", {'user': user})
