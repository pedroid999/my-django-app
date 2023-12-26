from django.views.generic import ListView
from .models import MyModel

class MyModelListView(ListView):
    model = MyModel
    template_name = 'myapp/mymodel_list.html'  # replace with your actual template pathfrom django.shortcuts import render

# Create your views here.