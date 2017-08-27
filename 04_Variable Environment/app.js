function b() {
    var myVar;
    console.log(myVar);
}

function a() {
    // Local execution context to function name a
    var myVar = 2;
    console.log(myVar);
    b();
}

// Global execution context
var myVar = 1;
console.log(myVar);
a();

console.log(myVar);