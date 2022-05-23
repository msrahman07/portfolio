from django.shortcuts import render
from django.http import HttpResponse
import json
from .models import Contact

# Create your views here.
def index(request):
    if(request.method == 'POST'):
        data = json.loads(request.body)
        print("got post request: ", data['email'])
        newContact = Contact(name=data['name'], email=data['email'], company=data['company'], message=data['message'])
        newContact.save()
    if(request.method == 'GET'):
        print("got get request: ")
    
    return HttpResponse("Done")