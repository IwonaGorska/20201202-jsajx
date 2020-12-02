import { assertThat } from '../../j4b1-assert'
/**
 * a10-the-need-of-modularity
 * Challenge
 *
 * Nasza stara biblioteka używa modułów do oddzielenia zależności pomiędzy kodem.
 * Mamy oczywiście dostęp do outer scope, więc komunikacja "z modułu" przebiega dość sprawnie.
 *
 * Jednak nie wiemy jak przekazać dane do środka modułu?!
 * Pomóż ustalić nam initialValue na 8000 tak aby kod wykonywał się poprawnie !
 *
 * * Reguły:
 * - możesz wrzucić argumenty do funkcji
 * - możesz dopisywać kod poniżej funkcji
 * - nie możesz zmieniać kodu w środku zakresu funkcji
 * - nie możesz odnosić się i nadpisywać zmiennej maxValue
 */

// pomocnicze maxValue (nie możesz zmieniać jego przypisania)
let maxValue = 0;

let hello = 'abababab'
// function hello(name, greetings) {
//     console.log(greetings);
//     console.log(greetings || 'Witaj', name)
// }
// hello('Michał');
// hello('Kasia', 'Hello', 1, 2, 3, 4, 5, 6, 7, 9);

;((moduleName, initialValue) => {
	// #Reguła:
  // Nie możesz w środku tego scope'a zmieniać kodu!
	console.log('ModuleName', moduleName);

	maxValue = initialValue;
})('MyValue', 8000);


// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'Max value from calculations should be equal 8000',
	expect => expect(maxValue).toBe(8000)
)  //?
