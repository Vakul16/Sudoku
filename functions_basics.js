// function declarations

function add(x = 0, y = 0) {
  let x, y;
  console.log('input x:' + x + ' input y : ' + y);
  console.log(`results inside function : ${x + y}`)

  return x + y;
}

// calling the function - add
// var result1 = add(5, 3);
// console.log(result1);
// console.log(add(10, "helo"));
// console.log("empty parameters", add())
// console.log(add);


// 2    <--> function expression
let multiply = function (x, y) { return x * y; }

// console.log(multiply(2, 7));
// console.log(multiply);



// arrow

// (a,b,c) => {};
let print = (x, y, z) => {
  console.log('Im inside an arro function and value: ' + x);
  console.log("another line ")
}
print(10)



// 3 anonymous function  <--> function expression
let square = (x) => {
  return x ** 2;
}

// 4 anonymous function with a line
let cube = x => x ** 3;



// Recursion functions using function name;
const f = function factorial(n) {
  return n < 2 ? 1 : n * factorial(n - 1)
}

// console.log(f(5));


// creating a map function

function map(f, a) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}



// for .. in




// constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var mycar = new Car('Eagle', 'Talon TSi', 1993);
