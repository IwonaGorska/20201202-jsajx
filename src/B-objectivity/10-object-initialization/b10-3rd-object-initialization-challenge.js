import { assertThat } from '../../j4b1-assert'

/**
 * b10-object-initialization
 * Challenge
 *
 * Nasz dział IT - musi ubierać się stosownie do pogody.
 * Dodatkowo każda osoba niesie ze sobą 1 dodatkową rzecz.
 *
 * * Reguły:
 * - Kod możesz pisać tylko w wyznaczonym do tego miejscu
 */

function dressUpAccordingToWeather(weatherProvider, props) {
	// #Reguła:
    // Możesz pisać tylko tutaj
    // const { name, lastName, has } = props;
    const name = props.name;
    const lastName = props.lastName;
    const has = props.has;
    // console.log(props.name);
    // console.log(props.lastName);
    // console.log(props.has);
    
    // const user = {
    //     name, // object property shorthand stosuje
    //     lastName: lastName,
    //     wearing: weatherProvider === 'sunny' ? 't-shirt' : 'coat'
    // }
    // // ES5:
    // user[has] = true;
    
    // Jesli bez ternary operatora:
    // user.wearing = 'coat';
    // if(weatherProvider === 'sunny') {
    //     user.wearing = 't-shirt'
    // }
    
    // return user;
    return {
        name, // object property shorthand stosuje
        lastName: lastName,
        wearing: weatherProvider === 'sunny' ? 't-shirt' : 'coat',
        [has]: true
    }
}


const person1 = dressUpAccordingToWeather('windy', {name: 'Jen', lastName: 'Barber', has: 'keys'})
const person2 = dressUpAccordingToWeather('sunny', {name: 'Maurice', lastName: 'Moss', has: 'duck'})
const person3 = dressUpAccordingToWeather('cloudy', {name: 'Roy', lastName: 'Trenneman', has: 'mug'})

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'person1 is Jen Barber',
	expect => expect(person1.name + ' ' + person1.lastName).toBe('Jen Barber')
)  //?
assertThat(
	'she has keys and wears coat',
	expect => expect(person1.keys + ' ' + person1.wearing).toBe('true coat')
)  //?
//----------
assertThat(
	'person2 is Maurice Moss',
	expect => expect(person2.name + ' ' + person2.lastName).toBe('Maurice Moss')
)  //?
assertThat(
	'he has duck and wears t-shirt',
	expect => expect(person2.duck + ' ' + person2.wearing).toBe('true t-shirt')
)  //?
//----------
assertThat(
	'person3 is Roy Trenneman',
	expect => expect(person3.name + ' ' + person3.lastName).toBe('Roy Trenneman')
)  //?
assertThat(
	'he has mug and wears coat',
	expect => expect(person3.mug + ' ' + person3.wearing).toBe('true coat')
)  //?
