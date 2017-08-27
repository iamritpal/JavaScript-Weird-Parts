function greet(whattosay) {
    
    return function(name) {
        console.log(whattosay + " " + name);
    }
}
greet('Hi')('Tony');

var sayHi = greet('Hi');    // invoking a function that returns a function 
sayHi('Tony');
sayHi('Amrit');


// Second classic example of clousers
function buildFunctions() {
    var arr = [];
    
    for (var i=0; i<3; i++) {
        
        // Creating the functions
        arr.push(                   // Array has 3 functions
            function() {
                console.log(i);
            }
        )
    }
    return arr;
}

var fs = buildFunctions();

// Invoking the functions   // Outputs      // Becuase i is one variable in memory
fs[0]();                    // 3
fs[1]();                    // 3
fs[2]();                    // 3

/*

buildFunctions()

Global Execution Context

*/


// How can we print 0, 1, 2, which is to preserve the value of i
function buildFunctions2() {
    var arr = [];
    
    for (var i=0; i<3; i++) {
        
        // Creating the functions
        arr.push(                   // Array has 3 functions // 3 copies will be stored with three
            (function(j) {          // IIFE
                return function() {
                    console.log(j);
                }
            }(i))
        )
    }
    return arr;
}

var fs2 = buildFunctions2();

// Invoking the functions   // Outputs      // Becuase i is one variable in memory
fs2[0]();                    // 0
fs2[1]();                    // 1
fs2[2]();                    // 2
