import { assertThat } from '../../j4b1-assert'
/**
 * b30-based-on-prototype
 * Challenge
 *
 * Jest rok 2030, samochody unoszą sie nad ziemią, a my wcinamy jedzenie z 1 tabletki dziennie.
 * Przeglądarka ChromeSpaceX w wersji 1287 ma już 99,00009% rynku.
 * Wszystko poszło do przodu, poza... naszym projektem.
 * Biznes wymyślił wsparcie dla legacy!
 * Musimy mieć obsługę dla przeglądarki z 2020 roku: Chrom w wersji 83
 * Używa ona zamierzchłej składni ES11.
 * Gdzie String nie posiada metod: `capitalize` i `last`, które weszły w 2025 roku - (ES16)
 * Niestety dotychczas używaliśmy ich w naszym projekcie!!
 *
 * Musimy dorobić polyfill'e do tych metod.
 * Bo nie ma śmiałka - żeby poprawić 12938 miejsca w naszym kodzie gdzie potencjalnie używamy tych metod.
 *
 * * Reguły:
 * - Brak reguł.... ten projekt po prostu musi działać.
 * - Nie można tylko ruszać kodziku z asercjami!
 */

 console.log('hello'[0]);
 console.log('hello'.charAt(0));
 
 console.log(''[0]);
 console.log(''.charAt(0) === '');
 
 if(!String.prototype.last) {
    String.prototype.last = function () {
        // console.log(this);
        return this.charAt(this.length - 1)
    }
 }

 if(!String.prototype.capitalize) {
    String.prototype.capitalize = function () {
        // console.log(this);
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
 }


// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'Last letter of Stefan suppose to be "n"',
	expect => expect('Stefan'.last()).toBe('n')
)  //?
assertThat(
	'Last letter of Hello worlD suppose to be "D"',
	expect => expect('Hello worlD'.last()).toBe('D')
)  //?
// --------------------------------:
assertThat(
	'Name "zbigniew" suppose to be capitalized to "Zbigniew"',
	expect => expect('zbigniew'.capitalize()).toBe('Zbigniew')
)  //?
assertThat(
	'Name "kornelia" suppose to be capitalized to "Kornelia"',
	expect => expect('kornelia'.capitalize()).toBe('Kornelia')
)  //?

// To co tutaj sobie zrobiliśmy, fachowo nazywa się "Polyfill"
// https://developer.mozilla.org/en-US/docs/Glossary/Polyfill

// Sama sytuacja jest wyimaginowana - jednak np. gdybyśmy mieli wpierać IE,
// Nie znajdziemy tam np. istniejącej od ES7 metody `.includes()` w String i Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

// Żeby, wszystko działało w IE, musimy użyć właśnie Polyfill'a !
