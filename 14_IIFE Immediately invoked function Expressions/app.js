// function statement
function greet(name) {
    console.log('Hello' + name);
}

greet();


// using a function expression
// during execution engine creates function object
var greetFunc = function(name) {
    console.log('Hello' + name);
};

greetFunc('John');


// This is immediately invoked function expression (IIFE)
var greeting  = function(name) {
    console.log("hellow orld");
    return name;
}('john');

console.log(greeting);      // Prints string greeting

var firstname = "Amritpal";

// Standalone IIFE
// Function expre wrapped in parenthesis to trick the syntax parser
// Creating and running the function at the same time.
(function(name) {
    var greeting = 'Inside IIFE : Hello ';
    console.log(greeting + name); 
}(firstname));


