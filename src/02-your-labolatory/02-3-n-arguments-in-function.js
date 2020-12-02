// ES5

function manyArguments() {
    // arguments jest obiektem "array like" a nie Array !!!!!
    console.log(arguments.forEach)
    console.log(arguments)
    console.log(arguments instanceof Array)
    console.log(arguments[0])
    console.log(arguments[4])
    // ES6+
    console.log(Array.from(arguments))
}
manyArguments(1, 2, 3, 4, 56)


// ES6+ (po 2015 roku)

function manyArguments2015(greetings, ...pomidor) {
    console.log(greetings)
    console.log(pomidor.forEach)
    // pomidor jest obiektem typu Array !
    console.log(pomidor instanceof Array)
    for(let arg of pomidor) {
        console.log(arg);
    }
}
manyArguments2015('Hello World', 2, 3, 4, 56)