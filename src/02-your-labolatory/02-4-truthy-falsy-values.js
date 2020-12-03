
typeof undefined; //?

var x;
if(x === undefined) {
    console.log('HEllo')
}

if(1 == '1') {
    console.log('Wykonam się')
}

if(1 === '1') {
    console.log('Nie Wykonam się')
}

// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
// https://dorey.github.io/JavaScript-Equality-Table/

const myObject = {};


console.log(myObject.hello);
if(myObject.hello) {
    console.log('Hello');
}
if(undefined) {
    console.log('Hello');
}
// To robi za nas JS:
if(Boolean(undefined)) {
    console.log('Hello');
}

console.log(Boolean(undefined));
console.log(Boolean('undefined'));
console.log(Boolean(''));
