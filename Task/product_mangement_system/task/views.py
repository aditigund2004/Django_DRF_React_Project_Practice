from django.shortcuts import redirect, render

from .models import Product_Info
from .productmodel import ProductInfoForm

# Create your views here.


def home(request): #add
    if request.method == "POST":
        form = ProductInfoForm(request.POST)
        
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = ProductInfoForm()
        
    pdb = Product_Info.objects.all()

    return render(request, 'home.html', {'form' : form, 'pdb': pdb})

def showall(request):
    pdb = Product_Info.objects.all()
    
    return render(request, 'home.html' , {'pdb' : pdb})
 

def update(request, name):
    pdb = Product_Info.objects.get(name = name)
    if request.method == "POST":
        form = ProductInfoForm(request.POST, instance = pdb)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = ProductInfoForm(instance = pdb)
    
    return render(request, 'home.html', {'form' : form})



def delete(request, name):
    Product_Info.objects.get(name = name).delete()
    
    pdb = Product_Info.objects.all()
    
    return render(request, 'home.html', {'pdb': pdb})


