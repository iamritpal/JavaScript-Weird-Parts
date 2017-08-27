

function getPerson() {
    return      // Syntax parser inserts automatic semi-colon
    {
        firstname : "Amritpal"
    }
}

// Prevent it by doing the following
function getPerson2() {
    return {
        firstname : "Amritpal"
    }
}

console.log(getPerson());       //

console.log(getPerson2());      // Good