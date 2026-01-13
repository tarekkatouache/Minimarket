"use strict";
const x = {
    name: "tarek katouache",
    age: 30,
};
let Y = 10;
Y = 20;
console.log(x);
let b = "hello";
console.log(b);
let arr = [1, 2, 3];
let arr2 = [2, true, "c"];
arr.push(4);
console.log(arr);
const U = () => {
    return alert("This is an arrow function");
};
function w() {
    alert("Welcome to TypeScript");
}
w();
U();
const z = (x, y) => {
    return x + y;
};
const person1 = {
    name: "Alice",
    age: 30,
    city: "London",
};
const person2 = {
    name: "Bob",
    age: 25,
    city: "New York",
};
console.log(person1.city);
console.log(person2.city);
let myObject = {
    id: 1,
    value: "Test",
};
// console.log(myObject);
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["initialized"] = "initialized";
    BookingStatus["confirmed"] = "confirmed";
    BookingStatus["cancelled"] = "cancelled";
})(BookingStatus || (BookingStatus = {}));
let bookingStatus = BookingStatus.initialized;
bookingStatus = BookingStatus.confirmed;
console.log(bookingStatus);
class Animal {
    constructor(name, kind) {
        this.name = name;
        this.kind = kind;
    }
}
const dog = new Animal("Buddy", " Dog");
function sum(x, y) {
    return x + y;
}
console.log(sum(5, 10));
