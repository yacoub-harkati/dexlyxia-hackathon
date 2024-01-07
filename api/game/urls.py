from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from .views import GameView, GameResponseView, CvcView, TextToSpeechAPIView


urlpatterns = [
    path("", csrf_exempt(GameView.as_view())),
    path("<int:pk>/", csrf_exempt(GameView.as_view())),
    path("response/", csrf_exempt(GameResponseView.as_view())),
    path("response/<int:pk>/", csrf_exempt(GameResponseView.as_view())),
    path("cvc_words/", csrf_exempt(CvcView.as_view())),
    path('textToSpeech/', csrf_exempt(TextToSpeechAPIView.as_view())),

]
