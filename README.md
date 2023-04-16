# _Independent Project Week 4: Pizza Parlor_

#### By _**Jessica Hattig**_

#### _Epicodus, Week 4: Object-Oriented JavaScript_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _VS Code_
* _Githhub_
* _Git_

## Description

_NEED TO EDIT._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the directory titled "Portfolio-project"._
* _Open the file "index.html" in your browser._

[GitHub-Pages](NEED NEW LINK)

## Tests
Describe: PizzaOrder()

Test: "It should create a pizza object."
Code: let Pizza = new PizzaOrder(["cheese", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["cheese", "pineapple"], size: "medium" }

Describe: PizzaOrder.prototype.addToppings()
 
Test: "It should add cost of a list of toppings to order."
Code: 
  PizzaOrder.prototype.addToppings(toppings list)
Expected Output: sum of the cost of the toppings.

Describe: TotalCost()

Test: "It should add the cost of the toppings and size."
Code:  PizzaOrder.prototype.totalCost(toppings cost, size cost)
Expected Output: Sum of topping cost and size. If size is not selected, add $100 to total cost.

Describe: nameCheck()
Test: "It should check the length of name."
Code:  PizzaOrder.prototype.nameCheck(inputted name)
Expected Output: If their submitted name is less than 4 letters long, equal "invalid name". 

## Known Bugs

* _No known bugs._


## License
MIT

Copyright (c) [2023] [Jessica Hattig]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Questions, concerns or ideas? Please share by reaching out to the author via email at jessicahattig@gmail.com. Thank you!