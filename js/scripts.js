//Buisness Logic for Pizza -------------
let Pizza = new PizzaOrder()

function PizzaOrder(toppings, size) {
    this.toppings = toppings;
    this.size = size;
    this.currentOrder = 0;
}

PizzaOrder.prototype.addOrder = function(order) {
    order.id = this.assignId();
    this.pizzaTotal[order.id] = order;
};

PizzaOrder.prototype.findOrder = function(id) {
    if (this.pizzaTotal[id] !== undefined) {
return this.pizzaTotal[id];
    }
    return false;
};

// Business Logic for Cost ---------

// Note: let order = new PizzaOrder() -- can run protypes on, going through and adding values of size of toppings  -- parseInt to change user inputs from strings to get value.
// // 

function TotalCost(toppings, pizzaSize) {
    if (pizzaSize) {
        total = pizzaSize
    }
    else {
        console.log("HELLO")
        total = 100
    }


    let toppingsArray = [];
    for (let i = 0; i < toppings.length; i++){
        if(toppings[i].checked){
        toppingsArray.push(toppings[i].id);
        }
    }
    total = parseInt(toppings) + parseInt(pizzaSize)
    console.log(total)
return total
}



// UI Logic
window.addEventListener("load", function() {
    console.log("here")
    document.querySelector("form").addEventListener("submit", handleFormSubmission)
});

function handleFormSubmission(event){
    event.preventDefault()
    const pizzaSize = document.querySelector('input[name="pizzaSize"]:checked').value
    const size = pizzaSize ? parseInt(pizzaSize.value) : null;
    const toppings = document.querySelectorAll('input[name="toppings"]:checked')
    console.log(toppings)
    console.log(pizzaSize)
    
    const outPut = TotalCost(toppings, pizzaSize)
    document.getElementById("pizzaTotal").innerText = outPut
};