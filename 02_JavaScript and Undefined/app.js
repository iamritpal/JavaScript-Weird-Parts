var a = 'Hellow orld';      // a is placed in memory in initial phase called value called undefined, is actually a value that is taking up space in memory

console.log(a);


a = undefined;      // Don't ever set a variable to undefined, helps debugging purposes

// Initial phase of execution phase sets all variables to value undefined

if (a === undefined) {          // undefined is a special value
    console.log('a is undefnied!');
} else {
    console.log('a is defined!');
}
