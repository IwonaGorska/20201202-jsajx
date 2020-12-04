import { assertThat } from '../../j4b1-assert'
/**
 * d20-collection-api
 * Warm up
 *
 *
 * * Reguły:
 * - Nie możesz usuwać istniejącego kodu
 * - Możesz dopisywać kod po prawej stronie przyrównania do `distinctNumbers`
 * - Nie możesz zmieniać wartości w `numbers`
 */

const numbers = [10, 20 , 30, 2, 2, 2, 30, 20, 2, 10, 8, 9, 0];
// const distinctNumbers = [...new Set(numbers)]
const distinctNumbers = Array.from(new Set(numbers));

console.log(Array.from('HELLO WORLD')) 

// distinctNumbers //?
// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'distinctNumbers list should not have number repetitions',
	expect => expect(distinctNumbers.toString()).toBe('10,20,30,2,8,9,0')
)  //?
