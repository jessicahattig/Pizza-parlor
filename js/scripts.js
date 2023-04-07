//Buisness Logic for Pizza -------------
function PizzaOrder() {
this.pizzaTotal = {};
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
function Cost (pizzaSize, toppingOne, toppingTwo, toppingThree) {
    this.pizzaSize = pizzaSize;
    this.toppingOne = toppingOne;
    this.toppingTwo = toppingTwo;
    this.toppingThree = toppingThree; 
};

Cost.prototype.totalCost = function() {
    return sum([pizzaSize.value] + [toppingOne.value] + [oppingTwo.value] + [toppingThree.value])
};

// User Interface Logic
function handleFormSubmission(event) {
    event.preventDefault();
    const pizzaSize = document.getElementsByName('pizzaSize').value;
    const toppingOne = document.getElementByName('toppingOne').value;
    const toppingTwo = ddocument.getElementByName('toppingTwo').value;
    const toppingThree = document.getElementByName('toppingThree').value;
    let order = new order(pizzaSize, toppingOne, toppingTwo, toppingThree);
    pizzaOrder.addOrder(new PizzaOrder)
};

function displayCost(event) {
    
}

function submitOrder(event){

}


window.addEventListener("submit", function()){
    document.querySelector("div#addOrder").addEventListener("submit", function handleFormSubmission);
    document.querySelector(id="btn").addEventListener("submit", handleDelete);
};