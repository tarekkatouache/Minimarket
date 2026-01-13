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


function w {
  console.log("hello from w function");
}
w();
