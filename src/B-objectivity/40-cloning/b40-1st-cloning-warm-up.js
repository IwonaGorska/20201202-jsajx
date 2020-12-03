import { assertThat } from '../../j4b1-assert'
/**
 * b40-cloning
 * Warm up
 *
 * Klonowanie obiektów
 *
 * * Reguły:
 * - Kod możesz pisać tylko w lokalnym scope funkcji `cloner`
 */

const myFirstObject = {
	name: 'August Oetker',
	age: 56,
	title: 'Dr.'
}

const myFirstImpressiveObject = {
	name: 'John Wick',
	age: 55,
	address: {
		zip: 11765,
		street: 'Horseshoe Road',
		neighbourhood: 'Long island',
		city: 'New York'
	}
}

// JS BUG który nie został naprawiony:
console.log(typeof null);


// Próba pokazania że typeof nie zaprowadzi nas do rozwiązania dla typów złożonych
console.log(typeof []);
console.log(typeof new Date());
console.log(typeof /\./g);
console.log(typeof {});

function cloner(objectToClone) {
	// #Reguła:
    // Kodzik można pisać tylko w tym bloku.
    // const myClone = { ...objectToClone };
    // const myClone = Object.assign({}, objectToClone);
    const myClone = {};
    for(let key in objectToClone) {
        console.log(key)
        console.log(key)
        console.log(key)
        if(typeof objectToClone[key] === 'object') {
            myClone[key] = cloner(objectToClone[key]); 
        } else  {
            myClone[key] = objectToClone[key];
        }
    }
	return myClone;
}


// #Reguła:
// Nie możesz zmieniać kodu poniżej:

const clonedFirstObject = cloner(myFirstObject);
const clonedFirstImpressiveObject = cloner(myFirstImpressiveObject);

assertThat(
	'clonedFirstObject > both suppose to be an objects',
	expect => expect(typeof clonedFirstObject).toBe(typeof myFirstObject)
)  //?
assertThat(
	'clonedFirstObject > not being the same instance in memory!',
	expect => expect(clonedFirstObject).notToBe(myFirstObject)
)  //?
assertThat(
	'clonedFirstObject > objects structure should be the same',
	expect => expect(JSON.stringify(clonedFirstObject)).toBe(JSON.stringify(myFirstObject))
)  //?

assertThat(
	'clonedFirstImpressiveObject > both suppose to be an objects',
	expect => expect(typeof clonedFirstImpressiveObject).toBe(typeof myFirstImpressiveObject)
)  //?
assertThat(
	'clonedFirstImpressiveObject > has same structure but not being the same instance in memory!',
	expect => expect(clonedFirstImpressiveObject).notToBe(myFirstImpressiveObject)
)  //?
assertThat(
	'clonedFirstImpressiveObject > clone suppose to be deep !',
	expect => expect(clonedFirstImpressiveObject.address).notToBe(myFirstImpressiveObject.address)
)  //?
assertThat(
	'clonedFirstImpressiveObject > object structure should be the same',
	expect => expect(JSON.stringify(clonedFirstImpressiveObject)).toBe(JSON.stringify(myFirstImpressiveObject))
)  //?
