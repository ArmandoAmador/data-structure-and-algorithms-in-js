// Variables

var num = 1;
num = 3;
var price = 1.5;
var name = 'Packt';
var trueValue = true;
var nullVar = null;
var und;

console.log("num: "+ num);
console.log("name: "+ name);
console.log("trueValue: "+ trueValue);
console.log("price: "+ price);
console.log("nullVar: "+ nullVar);
console.log("und: "+ und);

var myVariable = 'global';
myOtherVariable = 'global';

function myFunction() {
  var myVariable = 'local';
  return myVariable;
}

function myOtherFunction() {
  myOtherVariable = 'local';
  return myOtherVariable;
}

console.log(myVariable); // global;
console.log(myFunction()); // local;

console.log(myOtherVariable); // global;
console.log(myOtherFunction()); // local;

console.log(myOtherVariable); // local;


// Operators

var num = 0; // 0
num = num + 2; // 2
num = num * 3; // 6
num = num / 2; // 3
num++; // 4
num--; // 3

num += 1; // 4
num -= 2; // 2
num *= 3; // 6
num /= 2; // 3
num %= 3; // 0

console.log('num : ' + num);
console.log('num == 1 : ' + (num == 1));
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));

console.log('true && false : ' + (true && false));
console.log('true || false : ' + (true || false));
console.log('!true : ' + (!true));

// Bitwise

 console.log('5 & 1:', (5 & 1));
 console.log('5 | 1:', (5 | 1));
 console.log('~ 5:', (~5));
 console.log('5 ^ 1:', (5 ^ 1));
 console.log('5 << 1:', (5 << 1));
 console.log('5 >> 1:', (5 >> 1));

// Type Of

console.log('typeof num:', typeof num);
console.log('typeof Packt', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1,2,3]);
console.log('typeof {name:John}:', typeof {name: 'John'});

// delete
var myObj = {name: 'John', age: 21};
delete myObj.age;
console.log(myObj); // outputs Object { name: “John”}


// Truthy and false

function testTruthy(val){
  return val ? console.log('truthy') : console.log('falsy');
}

testTruthy(true); // true
testTruthy(false); // false
testTruthy(new Boolean(false)); // true (object is always true)

testTruthy('') // false
testTruthy('Packt') // true
testTruthy(new String('')); // true (object is always true)

testTruthy(1); // true
testTruthy(-1); // true
testTruthy(NaN); // false
testTruthy(new Number(NaN)); // true (object is always true)

testTruthy({}); // true (object is always true)

var obj = { name:'John'};
testTruthy(obj); // true;
testTruthy(obj.name); // true;
testTruthy(obj.age); // false (age does not exist)

// Conditional statements
var num = 1;

if (num === 1) {
  console.log("num is equal to 1");
}

var num = 0;
if (num === 1) {
  console.log("num is equal to 1");
} else {
  console.log("num is not equal to 1, the value of num is " + num);
}

if (num === 1) {
  num--;
} else  {
  num++;
}

// Ternary
(num === 1) ? num-- : num++;

// Multiple conditions
var month = 5;
if (month === 1) {
  console.log("January");
} else if (month === 2) {
  console.log("February");
} else if (month === 3) {
  console.log("March");
} else {
  console.log("Month is not January, February or March");
}

// switch statements

var month = 5;
switch(month) {
  case 1:
  console.log("January");
  break;
  case 2:
  console.log("February");
  break;
  case 3:
  console.log("March");
  break;
  default:
  console.log("Month is not January, February or March");
}


// Loops

// For Loop
for (var i=0; i<10; i++) {
  console.log(i);
}

// While Loop
var i = 0;
do {
  console.log(i);
  i++;
} while (i<10)


// Functions

function sayHello() {
  console.log('Hello!');
}

sayHello();

// Passing arguments to Functions

function output(text) {
  console.log(text);
}

output('Hello');


function sum(num1, num2) {
  return num1 + num2;
}

var result = sum(1,2);
output(result);


// Objects

var obj = new Object();
var obj = {};


obj = {
  name: {
    first: 'Gandalf',
    last: 'the Grey'
  },
  address: 'Middle Earth'
};


// Declaring a class that represents a book

function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

// Instantiate this class

var book = new Book('title', 'page', 'isbn');

// access and upate

console.log(book.title);
book.title = 'new title';
console.log(book.title)

// appending a function to a class
Book.prototype.printTitle = function() {
  console.log(this.title);
};

book.printTitle();

// declaring functions inside a class

function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIsbn = function() {
    console.log(this.isbn);
  }
}

var book = new Book('title', 'page', 'isbn');
book.printIsbn();


// ES6 Let

let language = 'JavaScript';
let language = 'Ruby!'; // - throws error
console.log(language);


// Variables scope with let
let movie = 'Lord of the Rings';

function starWarsFan() {
  let movie = 'Star Wars';
  return movie;
}

function marvelFan(){
  movie = 'The Avengers';
  return movie;
}

function blizzardFan() {
  let isFan = true;
  let phrase = 'Warcraft';
  console.log('Before if: ' + phrase);
  if (isFan) {
    let phrase = 'initial text';
    phrase = 'For the Horde!';
    console.log('Inside if: ' + phrase);
  }
  phrase = 'For the Alliance!';
  console.log('After if: ' + phrase);
}

console.log(movie); // Lord of the Rings
console.log(starWarsFan()); // Star Wars
console.log(marvelFan()); // The Avengers
console.log(movie); // The Avengers
blizzardFan();
// Before if: Warcraft
// Inside if: For the Horde!
// After if: For the Alliance!


// Const
const PI = 3.141593;
PI = 3.0; // throws err
console.log(PI);

// Template literals

var book = {
  name: 'Learning JavaScript Data Structures and Algorithms'
};

console.log('You are reading ' + book.name + '.,\n and this is a new line\n and so is this.');

console.log(`You are reading ${book.name}.,
and this is a new line
and so is this.`)


// Arrow functions example

// without arrow function
var circleArea = function circleArea(r) {
  var PI = 3.14;
  var area = PI * r * r;
  return area;
}

console.log(circleArea(2));

// With arrow function
let circleArea = (r) => {
  const PI = 3.14;
  let area = PI * r * r;
  return area;
}

console.log(circleArea(2));

// With arrow function one line
let circleArea2 = (r) => 3.14 * r * r


// Default parameter values for Functions

// Pre ES6
function sum (x, y, z) {
  if (x === undefined) {
    x = 1;
  }

  if (y === undefined) {
    y = 2;
  }

  if (z === undefined) {
    z = 3;
  }

  return x + y + z;
};

// ES6
function sum (x = 1, y = 2, z = 3) {
  return x + y + z
};

console.log(sum(4,2)); // outputs 9


// Declaring the spread and rest Operators

// ES5

var params =[3,4,5];
console.log(sum.apply(undefined, params));

// ES6
var params = [3,4,5];
console.log(sum(...params));



// ES5

function restParameterFunction (x, y) {
  var a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
};

// ES6

function restParameterFunction (x, y, ...a) {
  console.log(a);
  return (x + y) * a.length;
}

console.log(restParameterFunction(1,2, "hello", true, 7));


// Array destructuring

var [x, y] = ['a', 'b'];

var x = 'a';
var y = 'b';

// Swap Variables

// ES5
var temp = x;
x = y;
y = temp;

// ES6
[x, y] = [y, x];


// Property shorthand

// ES6
var [x, y] = ['a', 'b'];
var obj = { x, y };
console.log(obj); // { x: "a", y: "b" }

// ES5
var x = 'a';
var y = 'b';
var obj2 = { x: x, y: y};
console.log(obj2); // { x: "a", y: "b" }

// Method properties

var hello = {
  name: 'abcdef',
  printHello() {
    console.log('Hello');
  }
}

console.log(hello.printHello());

// Also written

var hello = {
  name: 'abcdef',
  printHello: function printHello() {
    console.log('Hello');
  }
}


// ES5
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

Book.prototype.printTitle = function() {
  console.log(this.title);
}

class Book {
  constructor (title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  printIsbn () {
    console.log(this.isbn);
  }
}


let book = new Book('title', 'page', 'isbn');
console.log(book.title); // outputs title
book.title = 'new title'; // updates the value of book title
console.log(book.title); // outputs the book title


// Inheritance

class ITBook extends Book {
  constructor (title, pages, isbn, technology) {
    super(title, pages, isbn);
    this.technology = technology;
  }

  printTechnology() {
    console.log(this.technology);
  }
}

let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890', 'Javascript');
console.log(jsBook.title);
console.log(jsBook.printTechnology());


// Wokring with getters and setters

class Person {
  constructor (name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let lotrChar = new Person('Frodo');
console.log(lotrChar.name);
lotrChar.name = 'Gandalf';
console.log(lotrChar.name);
lotrChar._name = 'Sam';
console.log(lotrChar.name);
