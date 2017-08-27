// variables and functions are moved up to the top in javascript
// Execution Context is created in two phases
//      1. Creation Phase:     Global Object, 'this',  Outer Environment
//                          Parser realizes the functions and variables created, before your code executes, variables and function you created in your program already exist in memory.
//                          All javascript variables are set to undefined by default.
//                          Preset things up
//      2. Execution Phase:   When the code is executed.


b();
console.log(a);

var a = 'Hellow orld';

function b() {
    console.log('Called b!');
}

b();
console.log(a);

console.log(z);     // Logs z us not defined