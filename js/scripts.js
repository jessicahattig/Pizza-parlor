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
const priceSmall = 10.00;
const priceMedium = 12.00;
const priceLarge = 17.00;
const priceToppings = 0.50; 
let subtotal = 0;

function handleFormSubmission(event) {
    event.preventDefault();
    const size = document.getElementById('size').value;
    const toppingOne = document.getElementById('toppingOne').value;
    const toppingTwo = ddocument.getElementById('toppingTwo').value;
    const toppingThree = document.getElementById('toppingThree').value;
    let order = new order(size,toppingOne, toppingTwo, toppingThree);
    pizzaOrder.addOrder(new PizzaOrder)
};

window.addEventListener("submit", function()){
    document.querySelector("div#pizza-total").addEventListener("submit", displayCost);
    document.querySelector(id="btn").addEventListener("submit", handleDelete);
};

let addressBook = new AddressBook();

function listContacts(addressBookToDisplay) {
  let contactsDiv = document.querySelector("div#contacts");
  contactsDiv.innerText =  null;
  const ul = document.createElement("ul");
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    const li = document.createElement("li");
    li.append(contact.fullName());
    li.setAttribute("id", contact.id);
    ul.append(li);
  });
  contactsDiv.append(ul);
}