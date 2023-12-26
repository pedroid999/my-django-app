from django.urls import path
from app.views import MyModelListView

urlpatterns = [
    path('', MyModelListView.as_view(), name='home'),
]