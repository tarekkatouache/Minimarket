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
console.log(person1.city);
console.log(person2.city);

type MyType = {
  id: number;
  value: string;
};
let myObject: MyType = {
  id: 1,
  value: "Test",
};
// console.log(myObject);
enum BookingStatus {
  initialized = "initialized",
  confirmed = "confirmed",
  cancelled = "cancelled",
}
let bookingStatus: BookingStatus = BookingStatus.initialized;
bookingStatus = BookingStatus.confirmed;
console.log(bookingStatus);

class Animal {
  name: string;
  kind: string;
  constructor(name: string, kind: string) {
    this.name = name;
    this.kind = kind;
  }
}
const dog = new Animal("Buddy", " Dog");
const sum = <T>(a: T, b: T) => {};
sum<string>("SADF", "asdf");

interface person {
  name: string;
  age: number;
  email: string;
}
interface personWithoutEmail extends Omit<person, "email"> {}

const personWithoutEmailObj: personWithoutEmail = {
  name: "John",
  age: 25,
};
console.log(personWithoutEmailObj);
