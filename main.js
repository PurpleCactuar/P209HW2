let orderNumber = 1000;

document.addEventListener("DOMContentLoaded", function (event) {
        // disable the lower part of the form until we have user input for all values
    document.getElementById("experience").disabled = true;
   
})

function formSubmitEvent() {
    let name = document.getElementById("custname").value;
    let address = document.getElementById("street").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value;

    // we could do much better validation, but that's not the point of this example!
    if (name.length > 2 && address.length > 2 && city.length > 2 && state.length > 1 && zip.length == 5) {
    }
    else {
        alert("please fill in all fields");
    }
}
  
    var theForm = document.forms["pizzaform"];
    var pizza_prices = new Array();
    pizza_prices["Small"]=7;
    pizza_prices["Medium"]=10;
    pizza_prices["Large"]=14;

//price based on the size
function getPizzaSizePrice()
{
    var pizzaSizePrice=0;
    var theForm = document.forms["pizzaform"];
    var selectedPizza = theForm.elements["selectedpizza"];
    for(var i = 0; i < selectedCake.length; i++)
    {
        if(selectedCake[i].checked)
        {
            cakeSizePrice = cake_prices[selectedCake[i].value];
            break;
        }
    }

    return pizzaSizePrice;
}
{
var toppings_prices= new Array();
toppings_prices["None"]=0;
toppings_prices["oneTopping"]=2;
toppings_prices["twoTopping"]=3;
}
function getToppingPrice()
{
    var pizzaToppingPrice=0;
 
    var theForm = document.forms["pizzaform"];
     var selectedTopping = theForm.elements["topping"];
    pizzaToppingPrice = topping_prices[selectedTopping.value];
    return pizzaToppingPrice;
}

function getTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var pizzaPrice = getPizzaSizePrice() + getToppingPrice();

    //display the result
    document.getElementById('totalPrice').innerHTML =
                                      "Total Price For Pizza $"+pizzaPrice;

}
