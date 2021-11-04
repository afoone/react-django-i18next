from django.http.response import HttpResponse
from django.shortcuts import render
from django.utils.translation import gettext as _


# Create your views here.
def hello(request):
    # Translators: This message appears on the home page only
    output = _("Welcome to my site.")
    return HttpResponse(output)
