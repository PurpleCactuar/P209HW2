
 //size of pizza
 var pizza_prices = new Array();
 pizza_prices["Small"]=7;
 pizza_prices["Medium"]=10;
 pizza_prices["Large"]=14;
 
 //toppings
 var filling_prices= new Array();
 filling_prices["None"]=0;
 filling_prices["One"]=2;
 filling_prices["Two"]=3;
 
	 
function getPizzaSizePrice()
{  
    var pizzaSizePrice=0;
    var theForm = document.forms["pizzaform"];
    var selectedPizza = theForm.elements["selectedpizza"];
    for(var i = 0; i < selectedPizza.length; i++)
    {
        if(selectedPizza[i].checked)
        {
            pizzaSizePrice = pizza_prices[selectedPizza[i].value];
            break;
        }
    }
    return pizzaSizePrice;
}

function getFillingPrice()
{
    var pizzaFillingPrice=0;
    var theForm = document.forms["pizzaform"];
    var selectedTopping = theForm.elements["topping"];
    pizzaToppingPrice = topping_prices[selectedTopping.value];
    return pizzaToppingPrice;
}

        
function calculateTotal()
{
    var pizzaPrice = getPizzaSizePrice() + getToppingPrice();
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the Pizza $"+pizzaPrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}
