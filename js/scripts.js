//Buisness Logic for Pizza -------------
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
function addOrder (pizzaSize, pizzaToppings) {
    this.pizzaSize = pizzaSize;
    this.pizzaToppings = pizzaToppings;

addOrder.prototype.totalCost = function() {
    return this.pizzaSize + " " + pizzaToppings
}};

// User Interface Logic
// function calculateSize(element) {
//     if (element == null) {
//         return;
// }
//     switch(element.value) {
//         case "10":
//             subtotal = small;
//             break;
//         case "12":
//             subtotal = medium;
//             break;
//         case "15":
//             subtotal = large;
//             break;
// }
// addOrder();




// const pizzaSize = document.querySelector(".pizzaSize")
// const pizzaToppings = document.querySelector(".pizzaToppings")
// // const addOrder = document.querySelector(".addOrder")

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
    // const outPut = array(sizeValue)
//   let order = new PizzaOrder() -- can run protypes on, going through and adding values of size of toppings  -- parseInt to change user inputs from strings to / 
//     document.getElementById("pizzaTotal").innerText = outPut
};