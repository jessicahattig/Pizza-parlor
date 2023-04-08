//Buisness Logic for Pizza -------------
function PizzaOrder() {
this.pizzaTotal = {};
this.currentOrder = 0;
};

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
const small = 10.00;
const medium = 12.00;
const large = 15.00;
const cheese = 0.00; 
const pepperoni = 2.00;
const pineapple = 3.00;
const spinach = 4.00;
let total = 0;

function calculateSize(element) {
    if (element == null) {
        return;
}
    switch(element.value) {
        case "10":
            subtotal = small;
            break;
        case "12":
            subtotal = medium;
            break;
        case "15":
            subtotal = large;
            break;
}
addOrder();




const pizzaSize = document.querySelector(".pizzaSize")
const pizzaToppings = document.querySelector(".pizzaToppings")
const addOrder = document.querySelector(".addOrder")

document.addEventListener("submit", e => {
    console.log(addOrder)})