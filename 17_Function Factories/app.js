// Closures, functions and callbacks

function makeGreeting(language) {
    return function(firstname, lastname) {
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }
        
        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }
    }
}

var greetEnglish = makeGreeting('en');  // Gets a new context
var greetSpanish = makeGreeting('es');  // Gets its own a new context


greetEnglish('John', 'Doe');
greetEnglish('Amritpal', 'Singh');
greetSpanish('John', 'Doe');


// Closures and callbacks

// You have used 
function sayHiLater() {
    var greeting = "hi!";
    
    setTimeout(function() {
        console.log(greeting);
    }, 3000);
}

sayHiLater();

// jQuery uses function expressions and first-class functions!
//$("button").click(function() {
//    
//});


// Callback Function - A function you give to another function to be run when the other function is finished


// example

function tellMeWhenDone(callback) {
    var a = 1000;
    var vb = 1000;
    
    callback();     // the callback, it runs the functino I give it
}

tellMeWhenDone(function() {
    console.log("i am done");
});

tellMeWhenDone(function() {
    alert("I am done");
});