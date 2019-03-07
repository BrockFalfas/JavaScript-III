/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.
* 2. Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. Whenever a constructor function is used, this refers to the specifc instance of the object that is created and returned by the constructor function.
* 4. Whenever Javascipt's call or app method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/
// 1. 
// Basic Function
// --------------
function greetMe(name) {
    console.log('Hello ' + name);
    console.log(this);
}

greetMe('Brock');

// 2.
// Object Method
// -------------
var greetMe = {
    greeting: 'Hello ',
    speak: function(name) {
        console.log(this.greeting + name);
        console.log(this);
    }
}

greetMe.speak('Brock');

// 3.
// Constructor Function
// --------------------
function GreetMe(name) {
    this.greeting = 'Hello ';
    this.name = name;
    this.speak = function() {
        console.log(this.greeting + this.name);
        console.log(this);
    }
};

var greetJohn = new GreetMe('Brock');
var greetJane = new GreetMe('Jenna');

greetJohn.speak();
greetJane.speak();

// 4.
// Using call/apply
// ----------------
greetJohn.sayGoodbye.call(greetJenna);
greetJane.sayGoodbye.apply(greetBrock);

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Brock F");

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Brock');

// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Falfas');
  const newman = new CordialPerson('Brock');
  
  newman.speak();
  newman.speak();

// Principle 4

// code example for Explicit Binding
brock.speak.call(falfas); falfas.speak.apply(brock);