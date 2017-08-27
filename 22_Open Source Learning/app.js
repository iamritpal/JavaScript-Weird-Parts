// HTML sits in tree like structure in the browser

var q1 = $("ul.people li");
console.log(q1);


// Method chaining - Calling one method after another and each method affects the parent object
var q = $("ul.people").addClass("newClass").removeClass("people");
console.log(q);

