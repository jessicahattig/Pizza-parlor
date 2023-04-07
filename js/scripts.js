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
    return this.currentId;
};

PizzaOrder.prototype.findOrder = function(id) {
    if (this.pizzaTotal[id] !== undefined) {
return this.pizzaTotal[id];
    }
    return false;
};
PizzaOrder.prototype.deleteOrder = function(id) {
    if (this.pizzaTotal[id] === undefined) {
        return false;
    }
delete this.pizzaTotal[id];
return true;
};

// Business Logic for Cost ---------
function Cost (pizzaSize, toppingOne, toppingTwo, toppingThree) {
    this.pizzaSize = pizzaSize;
    this.toppingOne = toppingOne;
    this.toppingTwo = toppingTwo;
    this.toppingThree = toppingThree; 
}

Cost.prototype.totalCost = function() {
    return sum(this.pizzaSize.value + this.toppingOne + this.toppingTwo + this.toppingThree);
};

// User Interface Logic
const Totalcost = () => {
    const options = document.getElementById("menu").options;
    let sum = 0;
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        sum += parseInt(options[i].value, 10);
      }
    }
  }
//////////////////
let pizzaOrder = new PizzaOrder();
function displayCost(event) {
    const pizzaOrder = pizzaOrder.findOrder(event.target.id);
    document.querySelector(".size").value = pizzaOrder.pizzaSize;
    document.querySelector(".topping1").value = pizzaOrder.toppingOne;
    document.querySelector(".topping2").value = pizzaOrder.toppingTwo;
    document.querySelector(".topping3").value = pizzaOrder.toppingThree;
    document.querySelector("button.submit").setAttribute("id", pizzaOrder.id);
    document.querySelector("div#pizza-total").removeAttribute("class");
  }
function handleorderSubmit(event){
    event.preventDefault();
    const inputtedPizzaSize = document.querySelector("input#size").value;
    const inputtedToppingOne = document.querySelector("input#toppingone").value;
    const inputtedToppingTwo = document.querySelector("input#toppingtwo").value;
    const inputtedToppingThree = document.querySelector("input#toppingthree").value;
    let newOrder = new Order(inputtedPizzaSize, inputtedToppingOne, inputtedToppingTwo, inputtedToppingThree);
    pizzaOrder.addOrder(newOrder);
    listCost(pizzaOrder);
    document.querySelector("input#size").value = null;
    document.querySelector("input#toppingone").value = null;
    document.querySelector("input#toppingtwo").value = null;
    document.querySelector("input#toppingthree").value = null;
}
function handleDelete(event) {
    addressBook.deleteOrder(event.target.id);
    document.querySelector("button.delete").removeAttribute("id");
    document.querySelector("div#contact-details").setAttribute("class", "hidden");
    listPizzatotal(pizzaOrder);
}

window.addEventListener("load", function ()) {
    document.querySelector("form#new-order").addEventListener("submit", handleFormSubmission);
    document.querySelector("div#cost").addEventListener("click", displayContactDetails);
    document.querySelector("button.delete").addEventListener("click", handleDelete);
}