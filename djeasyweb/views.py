from django.shortcuts import render
from django.contrib.auth.decorators import user_passes_test

# Create your views here.

def check_admin(user):
   return user.is_superuser

@user_passes_test(check_admin)
def home(request):
    return render(request, 'index.html')