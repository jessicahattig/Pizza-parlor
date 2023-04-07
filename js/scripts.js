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
    this.currentOrder += 1;
    return this.currentOrder;
};

Pizza.prototype.findOrder = function(id) {
    if (this.pizzaTotal[id] !== undefined) {
      return this.pizzaTotal[id];
    }
    return false;
  };
Pizza.prototype.deleteOrder = function(id) {
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
    return sum(this.pizzaSize + this.toppingOne + this.toppingTwo + this.toppingThree);
  };

// User Interface Logic
let order = new pizzaOrder

function displayCost(event) {
    const order = pizzaOrder.findOrder(event.target.id);
    document.querySelector(".size").value = order.pizzaSize;
    document.querySelector(".topping1").value = order.toppingOne;
    document.querySelector(".topping2").value = order.toppingTwo;
    document.querySelector(".topping3").value = order.toppingThree;
    document.querySelector("button.submit").setAttribute("id", contact.id);
    document.querySelector("div#pizzaTotal").removeAttribute("class");
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
