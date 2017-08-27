// Function is a special type of object that properties and methods
//      |-> Code
//      |-> Name
//      |-> Call method and has to do with 'this' object
//      |-> Apply method and has to do with 'this' object
//      |-> Bind method and has to do with 'this' object


var person = {
    firstname : 'John',
    lastname : 'Doe',
    getFullName : function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

// logName is a function object
var logName = function (lang1, lang2) {
    this.firstname = 'Amritpal';
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log("-------------------------");
}

// this keyword will point to the person object by binding the person object to logName
var logPersonName = logName.bind(person);   // bind creates a new copy of the function

//logName();

logPersonName('en');

// Immidiately invoke by call and apply

// Call rather than creating a copy it executes it
logName.call(person, 'en', 'es');

// Only difference between call and apply is the arrayed parameters list
logName.apply(person, ['en', 'pb']);

// Alternative way
var logName2 = function (lang1, lang2) {
    this.firstname = 'Gurpreet';
    console.log('Logged: ' + this.getFullName());
    console.log("-------------------------");
}.bind(person);

logName2();

//------------------------------------------
// function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

// Grab methods from other objects and use them as long as you have the same variable names
// Makes good patterns
person.getFullName.apply(person2);


//------------------------------------------
// function currying - Creating a copy of a function but with some preset parameters
// very useful in 
function multiply(a, b) {
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);     // Bind creates a copy and set permanent value of parameters

/*  Above is equvalent to
function multiplyByTwo(b) {
    a = 2;
    return a*b;
}
*/

console.log(multiplyByTwo(4));  // Prints 4*2=8

var multiplyByThree = multiply.bind(this, 3);   // Prints 4*3=12
console.log(multiplyByThree(4));