type User = {
  name: string;
  age: number;
};
const x: User = {
  name: "tarek katouache",
  age: 30,
};
let Y: number = 10;
Y = 20;
console.log(x);
let b: string = "hello";
console.log(b);
let arr: number[] = [1, 2, 3];
let arr2: any[] = [2, true, "c"];
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
const v = (x, y) => {
  return x + y;
};
console.log(v(89, 8));

const z = (x: string, y: number) => {
  return x + y;
};

interface Person {
  name: string;
  age: number;
  city?: string;
}
const person1: Person = {
  name: "Alice",
  age: 30,
  city: "London",
};
const person2: Person = {
  name: "Bob",
  age: 25,
  city: "New York",
};
console.log(person1);
console.log(person2);
alert(
  "person1 name is " +
    person1.name +
    " and age is " +
    person1.age +
    (person1.city ? " and city is " + person1.city : "")
);
