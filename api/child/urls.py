from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from .views import ChildView


urlpatterns = [
    path("", csrf_exempt(ChildView.as_view())),
    path("<int:pk>/", csrf_exempt(ChildView.as_view())),
]
