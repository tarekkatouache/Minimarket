"use strict";
const x = {
  name: "tarek katouache",
  age: 30,
};
let Y = 10;
Y = 20;
alert("x.name is " + x.name);
console.log(x);
let b = "hello";
console.log(b);
let arr = [1, 2, 3];
let arr2 = [2, true, "c"];
arr.push(4);
console.log(arr);
alert("Y is " + Y);
const U = () => {
  return alert("This is an arrow function");
};
function w() {
  alert("Welcome to TypeScript");
}
w();
U();
const v = (x, y) =>
  (number = (x, y) => {
    return x + y;
  });
alert(v());
