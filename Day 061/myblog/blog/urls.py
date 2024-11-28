from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('post/<int:id>/', views.post_detail, name='post_detail'),
    path('new/', views.new_post, name='new_post'),
    path('edit/<int:id>/', views.edit_post, name='edit_post'),
    path('delete<int:id>/', views.delete_post, name='delete_post'),
]