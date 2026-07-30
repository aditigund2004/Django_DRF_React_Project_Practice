from django.forms import ModelForm

from . models import Product_Info

class ProductInfoForm(ModelForm):
    class Meta:
        model = Product_Info
        fields = '__all__'