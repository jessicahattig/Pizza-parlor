//Buisness Logic for Pizza -------------
function PizzaOrder() {
this.pizzaTotal = {};
this.currentOrder = 0;
}

PizzaOrder.prototype.addOrder = function(order) {
    order.id = this.assignId();
    this.pizzaTotal[order.id] = order;
};

PizzaOrder.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentOrder;
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
}

Cost.prototype.totalCost = function() {
    return sum([pizzaSize.value] + [toppingOne.value] + [oppingTwo.value] + [toppingThree.value]);
};

// User Interface Logic
let pizzaOrder = new PizzaOrder();
function displayCost(event) {
    const pizzaOrder = pizzaOrder.findOrder(event.target.id);
    document.getElementById('size').value; 
    document.getElementById('toppingOne').value;
    document.getElementById('toppingTwo').value;
    document.getElementById('toppingThree').value;
    document.getElementbyId('submit').setAttribute("id", pizzaOrder.id);
    document.querySelector("div#pizza-total").removeAttribute("class");
}
function handleDelete(event) {
    addressBook.deleteOrder(event.target.id);
    document.querySelector("button.delete").removeAttribute("id");
    document.querySelector("div#menu-group").setAttribute("class", "hidden");
    listPizzatotal(pizzaOrder);
}

window.addEventListener("submit", function()){
    document.querySelector("div#pizza-total").addEventListener("submit", displayCost);
    document.querySelector(id="btn").addEventListener("submit", handleDelete);
};