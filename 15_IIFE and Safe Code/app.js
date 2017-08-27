var greeting = "Hola ";

// Code in IIFE is safe from Global Execution Context
// If you want you can pass window object as a parameter into IIFE
(function(global, name) {
    var greeting = 'Inside IIFE : Hello ';
    console.log(greeting + name); 
    console.log(global.greeting + name); 
}(window, "Amrit"));

console.log(greeting);