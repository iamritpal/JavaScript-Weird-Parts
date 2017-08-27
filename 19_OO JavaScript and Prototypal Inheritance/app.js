// Object-oriented javascript and prototypal inheritance
// Inheritance - One object gets access to the properties and methods of another object

// Classical inheritance vs Prototypal Inheritance
// Classical - friend, interface etc etc.
// Prototypal inheritance - Flexible, extensible, easy to understand

// Understanding the prototype
// 


var person = {
    firstname : 'Default',
    lastname : 'Default',
    getFullName : function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// Do not do this ever, for demo purposes only
// John now inherits from person
// If property or method not found on john, it is looked upon person.
john.__proto__ = person;

console.log(john.getFullName());

// Returns john because of the prototype chain, if not found on top, work your way down
console.log(john.firstname);

var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());
console.log("____________________________");

// Everything in javascript is an object (or a primitive)

var a = {};
var b = function() {};
var c = [];

// Reflection and extend
// Reflection - An object can look at itself listing and changing its properties and methods.

// An example of reflection

// loop over every member in the object
for (var prop in john) {
    console.log(prop + ': ' + john[prop]);
}
console.log("____________________________");
// loop over every member in the object
// check properties of base object only
for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);        
    }
}

var jane = {
    address : '111 Main st.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName : function() {
        return firstname;
    }
}

// extend john, combines objects
// physicall placed
_.extend(john, jane, jim)