//Assignment
// Design two objects, HtmlElement and HtmlSelectElement.
// HtmlElement has "click" instance method and "focus" prototype method.

// const e = new HtmlElement();
// e.click() and e.focus();

// Then, create "HtmlSelectElement" with items (optional), addItem, removeItem members.
// HtmlSelectElement needs to inherit "click" and "focus" methods.

// ============================= Using Classes ====================================

class HtmlElement {
//   everything declared inside the class body will be added to the prototype behind the scenes. 
//   Defining the click method in the constructor is the correct solution when leveraging classes.
//   What you defined inside constructor will be an instance property.
  click() {
    console.log("click");
  }
}

// So this syntax is more for constructor functions, but this works also. It's just not good practive to mix implementations up.
// So, either classes or constructor functions
HtmlElement.prototype.focus = function () {
  console.log("focus");
};

class HtmlSelectElement extends HtmlElement {
//   you should define it in the constructor with this keyword, because this property will be accesible in every instance considering your way.
  items = [];

  set settItems(value) {
    this.items = value;
  }
// best practice is to define constructor first
//   constructor(items = []) { - makes it optional. Or you could check inside constructor the value of this param
  constructor(items) {
    super();
    this.items = items;
  }

  addItem(element) {
    const updatedItems = [...this.items];
    updatedItems.push(element);
    this.settItems = updatedItems;
    //here I decided to make a setter to show my knowledge
    //Obviously it's not necessary to declare and assign a separate value to copy this.items
  }

  removeItem(value) {
    const result = this.items.filter((item) => item !== value);
    this.settItems = result;
  }
}

let arr = [1, 2, 3];
const obj = new HtmlSelectElement(arr);
obj.focus();
obj.click();
obj.addItem(4);
obj.removeItem(1);
console.log(obj.items);

//============================= Using Constructor functions inheritance ====================================

// function HtmlElement() {
//   this.click = function () {
//     console.log("click!");
//   };
// }

// HtmlElement.prototype.focus = function () {
//   console.log("focus!");
// };

// function HtmlSelectElement(items) {
//   this.items = items;
//   HtmlElement.call(this);

//   this.addItem = function (value) {
//     return this.items.push(value);
//   };

//   this.removeItem = function (value) {
//     const result = this.items.filter((item) => item !== value);
//     return result;
//   };
// }

// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
// HtmlSelectElement.prototype.constructor = HTMLSelectElement;

// const arr = [1, 2, 3];
// let obj = new HtmlSelectElement(arr);

// obj.addItem(4); // [1,2,3,4]
// console.log(obj.items);
// console.log(obj.removeItem(1)); //[2,3,4]

// obj.focus();
// obj.click();

// read more about classes. The constructor function implimentation is 100% corect. Well done
