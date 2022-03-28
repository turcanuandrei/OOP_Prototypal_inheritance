//Assignment
//Create a function which returns a module with the following
//accessible functions: sum, subtract, multiply, divide – that will perform the operations over 2 values.
//One of the values should be passed as a parameter to the module function, the other one should be a local variable.

// function getMathModule(z) {
//   let y = z;
//   let obj = {};
//   obj.sum = function (x) {
//     return y + x;
//   };
//   obj.subtract = function (x) {
//     return y - x;
//   };
//   obj.derive = function (x) {
//     return y / x;
//   };
//   obj.multiply = function (x) {
//     return y * x;
//   };
//   return obj;
// }

// let group = getMathModule(10);

// console.log(group.sum(2));
// console.log(group.subtract(2));
// console.log(group.multiply(2));
// console.log(group.derive(2));

/* good but you could've returned the object right away with sum, subtract and so on as keys */
function getMathModule(z) {
  let y = z;
  let obj = {};
  obj.sum = function (x) {
    return y + x;
  };
  obj.subtract = function (x) {
    return y - x;
  };
  obj.derive = function (x) {
    return y / x;
  };
  obj.multiply = function (x) {
    return y * x;
  };
  return {
    sum(x) {
      return y + x;
    },
    subtract(x) {
      return y - x;
    },
    derive(x) {
      return y / x;
    },
    multiply(x) {
      return y * x;
    },
  };
}

