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

// let order = new PizzaOrder() -- can run protypes on, going through and adding values of size of toppings  -- parseInt to change user inputs from strings to / 
// // 

function TotalCost(toppings, pizzaSize) {
    console.log(toppings, pizzaSize)
    if (pizzaSize) {
        total = parseInt(toppings) + parseInt(pizzaSize)
    }
    else {
        total = parseInt(toppings) + 100
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
    const toppings = document.querySelector('input[name="toppings"]:checked').value
    console.log(toppings)
    console.log(pizzaSize)
    
    const outPut = TotalCost(toppings, pizzaSize)
    document.getElementById("pizzaTotal").innerText = outPut
};