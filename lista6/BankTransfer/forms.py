from django import forms

from BankTransfer.models import PendingTransfer
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class SignUpForm(UserCreationForm):
    email = forms.EmailField(max_length=254)

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2', )

class TranferMetaForm(forms.ModelForm):
    def save(self, user,date, commit=True):
        # get the instance so we can add the user to it.
        instance = super(TranferMetaForm, self).save(commit=False)
        instance.user = user
        instance.date = date

        # Do we need to save all changes now?
        if commit:
            instance.save()
            self.save_m2m()

        return instance


class TransferForm(TranferMetaForm):
    class Meta:
        model = PendingTransfer
        fields = ['receiver', 'title', 'amount']
