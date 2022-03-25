//Assignment
// Design two objects, HtmlElement and HtmlSelectElement.
// HtmlElement has "click" instance method and "focus" prototype method.

// const e = new HtmlElement();
// e.click() and e.focus();

// Then, create "HtmlSelectElement" with items (optional), addItem, removeItem members.
// HtmlSelectElement needs to inherit "click" and "focus" methods.

// ============================= Using Classes ====================================

class HtmlElement {
  click() {
    console.log("click");
  }
}

HtmlElement.prototype.focus = function () {
  console.log("focus");
};

class HtmlSelectElement extends HtmlElement {
  items = [];

  set settItems(value) {
    this.items = value;
  }

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
