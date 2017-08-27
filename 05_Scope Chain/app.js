// Think of who created me to find the outer reference.

function a() {
    function b() {
        console.log(myVar); // value of myVar is 2
    }
    
    // Local execution context to function name a
    var myVar = 2;
    b();
}

// Global execution context
var myVar = 1;
a();

