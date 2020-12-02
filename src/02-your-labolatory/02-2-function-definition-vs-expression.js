console.log(iAmDefined);
iAmDefined();


function iAmDefined() {
    
}

const iAmExpression = function () {
    return { hello: 'World'}
}
// Po 2015:
const iAmArrowExpression = () => String(123) + '!';


// console.log(iAmArrowExpression2);
// Niejawne rzutowanie działa w JS "Out of the box!!!"
// const iAmArrowExpression = () => 123 + '!';
const iAmArrowExpression2 = () => {
    // Arrow może mieć wiele linii i potem skorzystać z return
    
    
    return 123;
};

// Wywołanie (CALL):
iAmDefined();
iAmExpression(); //?
iAmArrowExpression(); //?
iAmArrowExpression2(); //?