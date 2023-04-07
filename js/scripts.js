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
function displayCost(event) {
    const contact = addressBook.findContact(event.target.id);
    document.querySelector(".first-name").innerText = contact.firstName;
    document.querySelector(".last-name").innerText = contact.lastName;
    document.querySelector(".phone-number").innerText = contact.phoneNumber;
    document.querySelector(".physical-address").innerText = contact.physicalAddress;
    document.querySelector(".personal-email").innerText = contact.emailAddress[0];
    document.querySelector(".work-email").innerText = contact.emailAddress[1];
    document.querySelector("button.delete").setAttribute("id", contact.id);
    document.querySelector("div#contact-details").removeAttribute("class");
  }
  