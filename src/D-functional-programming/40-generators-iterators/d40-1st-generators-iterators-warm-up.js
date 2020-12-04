import { assertThat } from '../../j4b1-assert'
/**
 * d40-generators-iterators
 * Warm up
 *
 * * Reguły:
 * - Możesz zmieniać kod tam gdzie jest to wyraźnie zapisane, lub gdzie nie ma co do tego reguł.
 */

const splitter = [];
for(const x of 'Latte') {
    // Możesz pisać kod tutaj (wewnątrz tego bloku):
    console.log(x);
    splitter.push(x);
}
// #Reguła:
// Nie możesz zmieniać tego kodu:
assertThat(
	'splitter should collect the word Latte - after join',
	expect => expect(splitter.join('')).toBe('Latte')
)  //?

Object.entries({ user: 'Mike'}) //?
Object.keys({ user: 'Mike'}) //?
Object.values({ user: 'Mike'}) //?
// Nie możesz zmieniać wartości w `numeric`
const numeric = [[1, 2], [3, 4]];
// Możesz ruszać przypisania w num1 i num2
let num1 = '';
let num2 = '';
// pętla musi zostać i iterować po `numeric`, jednak możesz modyfikować jej zawartość
for(const [no1, no2] of numeric) {
    // Możesz pisać kod tutaj (wewnątrz tego bloku):
    // const [no1, no2] = placeholder;
    // console.log(placeholder)
    // num1 += String(placeholder[0]);
    // num2 += String(placeholder[1]);
    num1 += no1;
    num2 += no2;
}
// #Reguła:
// Nie możesz zmieniać tego kodu:
assertThat(
	'num1 suppose to equal "13"',
	expect => expect(num1).toBe('13')
)  //?
assertThat(
	'num2 suppose to equal "24"',
	expect => expect(num2).toBe('24')
)  //?
// ------------------------------

// Możesz edytować ten wpis
const DYNAMIC_KEY = 'show';

// Nie możesz dodawać nowych metod to tej klasy!
// Możesz edytować nazwy metod
class MyIterableConcept {

	['thisIsSimple']() {
        // Tutaj można pisać kodzik
        return 'FUN'
	}

	[DYNAMIC_KEY + 'MeSomeNumbers']() {
         // Tutaj można pisać kodzik
         return [90, 10, 20]
	}
}

const iterables = new MyIterableConcept();

// #Reguła:
// Nie możesz zmieniać tego kodu:
assertThat(
	'MyIterableConcept instance should have method thisIsSimple() which return "FUN" ',
	expect => expect(iterables.thisIsSimple()).toBe('FUN')
)  //?
assertThat(
	'MyIterableConcept instance should have method showMeSomeNumbers() which return [90, 10, 20] ',
	expect => expect(iterables.showMeSomeNumbers().toString()).toBe('90,10,20')
)  //?
