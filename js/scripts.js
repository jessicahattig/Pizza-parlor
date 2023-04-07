//Buisness Logic for Pizza -------------
function PizzaOrder() {
this.pizzaTotal = {};
this.currentOrder = 0;
}

PizzaOrder.prototype.addOrder = function(order) {
    order.id = this.assignId();
    this.pizzaTotal[order.value] = order;
  };

PizzaOrder.prototype.assignId = function() {
    this.currentOrder += 1;
    return this.currentOrder;
};

Pizza.prototype.findOrder = function(id) {
    if (this.pizzaTotal[value] !== undefined) {
      return this.pizzaTotal[value];
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
    return sum(this.pizzaSize.value + this.toppingOne + this.toppingTwo + this.toppingThree);
  };

// User Interface Logic
function displayCost(event) {
    const order = addressBook.findOrder(event.target.value);
    document.querySelector(".first-name").innerText = contact.firstName;
    document.querySelector(".last-name").innerText = contact.lastName;
    document.querySelector(".phone-number").innerText = contact.phoneNumber;
    document.querySelector(".physical-address").innerText = contact.physicalAddress;
    document.querySelector(".personal-email").innerText = contact.emailAddress[0];
    document.querySelector(".work-email").innerText = contact.emailAddress[1];
    document.querySelector("button.delete").setAttribute("id", contact.id);
    document.querySelector("div#contact-details").removeAttribute("class");
  }
  