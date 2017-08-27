// Arrays can hold anything, even functions
var arr = new Array();

// Array literal syntax

var arry = [
    1, 
    false, 
    {
        name: "amrit",
        address: "124 Street"
    },
    function(name) {
        var greeting = "hello ";
        console.log(greeting + name);
    },
    "hello"
];

console.log(arry);
arry[3](arry[2].name);


