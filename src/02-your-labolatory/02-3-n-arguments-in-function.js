// ES5

function manyArguments() {
    console.log(arguments)
    console.log(arguments[0])
    console.log(arguments[4])
}
manyArguments(1, 2, 3, 4, 56)


// ES6+ (po 2015 roku)

function manyArguments2015(greetings, ...pomidor) {
    console.log(greetings)
    console.log(pomidor)
    for(let arg of pomidor) {
        console.log(arg);
    }
}
manyArguments2015('Hello World', 2, 3, 4, 56)