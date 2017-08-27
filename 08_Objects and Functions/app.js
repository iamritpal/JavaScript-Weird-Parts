// Create a new object, not a prefered way of creating objects in javascript
var person = new Object();

// Objects are name value pairs sitting in memory

// Computer member access operator
person["firstname"] = "Amritpal";
person["lastname"] = "Singh";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);


console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();

person.address.street = "87-27 124street";
person.address.zip = "11418";
person.address.city = "Richmond Hill";

console.log(person.address.street);
console.log(person["address"]["street"]);

// Object literal syntax, short hand for creating object literals
var people = {
    firstname : "Amritpal",
    lastname : "Singh",
    address : {
        street : "87-27 124street",
        zip : "11418",
        city : "Richmond Hill"
    }
};


people.address2 = {
    street : "I don't know"
}

console.log(people);

function greet(aPerson) {
    console.log('Hi ' + aPerson.firstname);
}

greet(people);
// Create object on the fly 
greet({
    firstname : "Mary",
    lastname : "Doe"
});



// JSON and Object literals
var jObj = {
    "test" : 1,
    "test2" : 2
};

console.log(jObj);

// Objects functions and "this"
console.log(this);      // Points to global object, which is window object


function a() {
    console.log(this);
}

a();

var b = function() {
    console.log(this);
    this.newvariable = 'hello';
}

b();

console.log(newvariable);

// this variable in javascript objects
var c = {
    name : "the c object",
    log : function() {
                var self = this;
        
                self.name = "amritpal singh";
                console.log(self);
                var setname = function(newname) {
                    self.name = newname;    
                }

                setname('my newname');
                console.log(self);
        }
};

c.log();