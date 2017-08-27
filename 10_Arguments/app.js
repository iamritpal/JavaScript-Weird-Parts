// Arguments: The parameters you pass to a function
// Javascript gives you a keyword of the same name which contains them all.

function greet(firstname, lastname, language, ...other) {
    
    language = language || 'en';
    
    if (arguments.length === 0) {
        console.log("Missing paramenters");
        return;        
    }
    
    console.log(arguments);     // Contains the list of all the arguments, its array like, but isn't really javascript array
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    
    console.log("arg 0: " + arguments[0]);
    

    // New thing is spread, an alternative to "arguments"
    console.log(other.length);

    
    console.log("--------------------")
    
    
    
}


greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'eng', 'hello');