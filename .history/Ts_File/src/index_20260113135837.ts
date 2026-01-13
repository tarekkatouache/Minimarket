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
alert("x.name is " + x.name);
console.log(x);
let b: string = "hello";
console.log(b);
let arr: number[] = [1, 2, 3];
let arr2: any[] = [2, true, "c"];
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
const v = (x, y) => {
  return x + y;
};
console.log(v(89, 8));

alert(v(98, 654));
const z = (x: string, y: number) => {
  return x + y;
};
