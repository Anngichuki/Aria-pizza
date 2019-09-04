// 
function processForm(){
    
var size = document.getElementById("food").elements[0].value;
var crust = document.getElementById("food").elements[1].value;
var toppings= document.getElementById("food").elements[2].value;

var costSize = "";
var costCrust = "";
var costToppings="";
pizzaPrice = "";

if(size=="small"){
costSize = 100;
} if(size=="medium"){
costSize = 200;
} if(size=="large"){
costSize = 300;
}

if(crust=="crispy"){
costCrust = 100;
} if(crust=="stuffed"){
costCrust = 200;
} if(crust=="glutten-free"){
costCrust = 300;
}

if(toppings=="beef"){
costToppings = 100;
} if(toppings=="chicken"){
costToppings = 200;
} if(toppings=="extra-cheese"){
costToppings = 300;
}
  var pizzaPrice = parseInt((costSize) + (costCrust) + (costToppings));
 console.log(pizzaPrice);

var delivery = [100, 0];
var optionD =parseInt(document.getElementById("pick").value);
var costOfDelivery = parseInt(delivery[optionD-1]); 

if (optionD===1){
    prompt("Enter location");
    alert("Your order will be delivered")
    alert("Your Pizza will cost " + (pizzaPrice + costOfDelivery ));
}else{
    if(optionD===2){
         alert("thanks for shopping with us")
        alert("Your Pizza will cost " + pizzaPrice);
    }
}
 
 

}