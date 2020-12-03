import { assertThat } from '../../j4b1-assert'
/**
 * b50-setters-getters
 * Warm up
 *
 * * Reguły:
 * - Nie można zmieniać kodu nigdzie, poza instancją - wnętrzem `person`
 */
const person = {
	// #Reguła:
    // Kodzik można pisać tylko tutaj w środku.
    name: 'Janusz',
    lastName: 'Kowalski',
    get email() {
        // return (this.name + '.' + this.lastName + '@workload.com').toLowerCase();
        return `${this.name}.${this.lastName}@workload.com`.toLowerCase();
    }
}

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'Person name + lastName should be Janusz Kowalski',
	expect => expect([person.name, person.lastName].join(' ')).toBe('Janusz Kowalski')
)  //?
assertThat(
	'Person email should be janusz.kowalski@workload.com',
	expect => expect(person.email).toBe('janusz.kowalski@workload.com')
)  //?
// Po zmianie imienia i nazwiska powinien zmienić się email:
person.name = 'Grażyna';
person.lastName = 'Nowak';
assertThat(
	'Person email from now - should be grażyna.nowak@workload.com',
	expect => expect(person.email).toBe('grażyna.nowak@workload.com')
)  //?
