import { assertThat } from '../../j4b1-assert'
/**
 * b10-object-initialization
 * Warm up
 *
 * Popatrz no mnie, jaki ten dżawaskript jest dziwny...
 * Tutaj to nawet klas nie potrzeba żeby obiekty działały 😯
 *
 * * Reguły:
 * - musisz dopisać cały kod, potrzebny do poprawnego działania przypadków testowych
 */
const myItCrowd = {
    characters: {
        list: ['Maurice', 'Jen', 'Roy']
    },
    office: {
        // answerPhone: function() {
        //     return 'Have you tried to turn it off and on again?'
        // }
        // ES6:
        // answerPhone: () => 'Have you tried to turn it off and on again?'
        // ES6? 
        answerPhone() {
            return 'Have you tried to turn it off and on again?'
        }    
    }
}
// console.log(myItCrowd.characters);


// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'myItCrowd should have a list of [Maurice, Jen, Roy] present',
	expect => expect(myItCrowd.characters.list.toString()).toBe('Maurice,Jen,Roy')
)  //?
assertThat(
	'myItCrowd should have answerPhone method with proper text returned',
	expect => expect(myItCrowd.office.answerPhone()).toBe('Have you tried to turn it off and on again?')
)  //?
