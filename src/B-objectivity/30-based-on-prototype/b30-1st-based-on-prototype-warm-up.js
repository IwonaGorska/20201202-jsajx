import { assertThat } from '../../j4b1-assert'
/**
 * b30-based-on-prototype
 * Warm up
 *
 * Tym razem "zapomniałem" dopisać jednej metody ale w klasie... pomożesz?
 *
 * * Reguły:
 * - Nie możesz dopisywać kodu w środku "klasy" Person
 * - Postaraj się zastosować zasadę "DRY" - Don't Repeat Yourself 😎
 */

function Person(fullName = '') {
    this.fullName = fullName;
    // this.introduce = function () {
    //    return 'My name is ' + this.fullName; 
    // }
}
Person.prototype.introduce = function () {
    return 'My name is ' + this.fullName; 
}

console.log(Person.prototype);

const actor = new Person('Richard Ayoade');
const theItGuy = new Person('Maurice Moss');
const theBoss = new Person('Douglas Reynholm');
// actor.introduce = function () {
//     return 'My name is ' + this.fullName; 
// }

// actor = {};



// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'Actor should be able to introduce himself',
	expect => expect(actor.introduce()).toBe('My name is Richard Ayoade')
)  //?
assertThat(
	'It Guy should be able to introduce himself',
	expect => expect(theItGuy.introduce()).toBe('My name is Maurice Moss')
)  //?
assertThat(
	'Boss should be able to introduce himself',
	expect => expect(theBoss.introduce()).toBe('My name is Douglas Reynholm')
)  //?


