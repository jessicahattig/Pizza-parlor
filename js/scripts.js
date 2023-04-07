//Buisness Logic for Pizza -------------
function Pizza() {
this.pizzaTotal={};
this.currentId = 0;
}

AddressBook.prototype.addContact = function(Cost) {
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
  };

AddressBook.prototype.findContact = function(id) {
    if (this.contacts[id] !== undefined) {
      return this.contacts[id];
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
