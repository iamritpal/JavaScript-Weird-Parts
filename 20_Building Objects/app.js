// Building Objects
// Function Constructors

function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log("This function is invoked");

    //return {greeting : 'i got in the way'};
    
}

Person.prototype.getFullName = function() {
    return 'Full name: ' + this.firstname + ' ' + this.lastname;
}

// Right ways of creating objects 


// john __proto__ points to Person.prototype, so does jane's

// Create an object, function constructor
var john = new Person('John','Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

// Function constructors: A normal that is used to construct objects. The 'this' variable points a new empty object and that object is returned from the function automatically.

// How do we set the prototype?
// Function constructor already sets the prototype
// Function is a special type of object
// Every function has a prototype property, used only by the new operator


Person.prototype.getFormalFullName = function() {
    return 'Formal full name: ' + this.firstname + ' ' + this.lastname;
}

console.log(john.getFullName());
console.log(john.getFormalFullName());

// Functions take up space in memory, so add it to the prototype, it is better to put your method in prototype.


// Dangerous Aside - You may forget to put the 'new' keyword
// Capitalize function constructors



//______________________________________________________________________________

console.log("built in function constructors");

// All strings have this function now. Cooooooleeest thing ever
String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

console.log("john".isLengthGreaterThan(5));


Number.prototype.isPositive = function() {
    return this > 0;
}

var c = new Number(-3);
console.log(c.isPositive());

// Dangerous aside do not use build in function constructors
var a = 3;
var b = Number(3);

//if (a === b) {
//    UNTRUE
//}

// Dangerous aside - For arrays standard for loop       for (i=0;i<5;i++)   e.g.

Array.prototype.myCustomFeature = 'cool!';

var arr = ['john', 'jane', 'jim'];

// don't do this
for (var prop in arr) {
    console.log(prop + ": " + arr[prop]);
}

// Pure protypal inheritance

var person = {
    firstname : 'Defualt',
    lastname : 'default',
    greet : function() {
        return 'Hi ' + this.firstname;
    }
}

var johny = Object.create(person);
johny.firstname = 'Amrit';
johny.lastname = 'Singh';
console.log(johny);

// Polyfill - Code that adds a feature which the engine may lack.
// If exists in browser skips it
if (!Object.create) {
    Object.create = function(o) {
        function F() {}
        F.prototype = o;
        return new F();
    }
}



