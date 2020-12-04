import { assertThat } from '../../j4b1-assert'
/**
 * d10-filter-map-reduce
 * Warm up
 *
 * Zamiana kejsów!
 *
 * * Reguły:
 * - Dopisz brakujące metody
 * - Transformując dane staraj się korzystać z programowania funkcyjnego (metody tablicowe)
 */

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(capitalize('word'))
console.log(capitalize('marek')) 

function kebabCaseToPascalCase(sentence) {
    // const baseWords = sentence.split('-');
    // const resultWords = [];
    // console.log(baseWords);
    // for(let word of baseWords) {
    //     resultWords.push(capitalize(word))
    // }
    return sentence.split('-').map(capitalize).join('')
}

function kebabCaseToCamelCase(sentence) {
    const capitalizeIfNotFirstWord = (word, idx) => idx === 0 ? word.toLowerCase() : capitalize(word);
    
    return sentence.split('-').map(capitalizeIfNotFirstWord).join('')
}

function kebabCaseToSnakeCase(sentence) {
    return sentence.toLowerCase().split('-').join('_')
}

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'capitalize > should make first letter to uppercase',
	expect => expect(capitalize('this is it')).toBe('This is it')
)  //?
assertThat(
	'kebabCaseToCamelCase > Should convert string hello-world in to helloWorld',
	expect => expect(kebabCaseToCamelCase('hello-world')).toBe('helloWorld')
)  //?
assertThat(
	'kebabCaseToPascalCase > Should convert string my-super-world in to MySuperWorld',
	expect => expect(kebabCaseToPascalCase('my-super-world')).toBe('MySuperWorld')
)  //?
assertThat(
	'kebabCaseToSnakeCase > Should convert string my-first-python-variable in to my_first_python_variable',
	expect => expect(kebabCaseToSnakeCase('my-first-python-variable')).toBe('my_first_python_variable')
)  //?
