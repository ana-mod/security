"""Bank URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.views.generic.base import TemplateView

from BankTransfer.views import create_transfer_view, create_transfer_confirm_view, create_history_view, signup, login, logout
from BankTransfer import views as core_views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', TemplateView.as_view(template_name='home.html'), name='home'),
    url(r'^login/$', auth_views.LoginView.as_view(template_name= 'login.html'), name='login'),
    url(r'^logout/$', logout, name='logout'),
    url(r'^transfer/$', create_transfer_view,  name='transfer'),
    url(r'^transfer_confirm/$', create_transfer_confirm_view,  name='transfer_confirm'),
    url(r'^history/$', create_history_view, name ='history'),
    url(r'^signup/$', core_views.signup, name='signup'),
    url(r'^password_reset/$', auth_views.password_reset, name='password_reset'),
    url(r'^password_reset/done/$', auth_views.password_reset_done, name='password_reset_done'),
    url(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        auth_views.password_reset_confirm, name='password_reset_confirm'),
    url(r'^reset/done/$', auth_views.password_reset_complete, name='password_reset_complete')
]
