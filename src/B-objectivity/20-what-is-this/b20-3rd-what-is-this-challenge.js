import { assertThat } from '../../j4b1-assert'
/**
 * b20-what-is-this
 * Challenge
 *
 * Coś nie idzie nam ten cały "nowy super frejmłork z Dżawaskripta" co nam polecali na sieci ostatnio
 * Taki hajp na to jest a nie dajemy rady sobie zwykłego "onClick'a" na butonie załączyć 😐.
 * Pomożesz ?
 *
 * * Reguły:
 * - Nie możesz usuwać istniejącego kodu
 * - Kodzik możesz tylko dopisywać
 * - Nie możesz zmieniać przypisania onClick z linii :26
 * - Możesz dodawać kod w ShowDepartmentButton
 */

 
 
 
class ShowDepartmentButton {

	name = 'IT Department'

    constructor() {
        // #4 100% legalnie:
        this.printMyName = this.printMyName.bind(this);
    }
    
    // #3 Experimental
	// printMyName = () => {
	// 	return this.name;
    // }
    printMyName() {
       return this.name;
    }
    
	render() {
        // #4
        
		return {
			type: 'button',
            name: 'Gotcha !',
            onClick: this.printMyName,
            // onClick: () => this.printMyName(), // #1
            // onClick: this.printMyName.bind(this), // #2
			innerHTML: 'Show your department'
		}
	}
}


// #Reguła:
// Nie możesz zmieniać kodu poniżej:
const myComponent = new ShowDepartmentButton();
const renderedComponent = myComponent.render();

assertThat(
	'renderedComponent should be a button',
	expect => expect(renderedComponent.type).toBe('button')
)  //?
assertThat(
	'renderedComponent should have onCLick handler attached',
	expect => expect(typeof renderedComponent.onClick).toBe('function')
)  //?
assertThat(
	'renderedComponent when Clicked should show name of the Department',
	expect => expect(renderedComponent.onClick()).toBe('IT Department')
)  //?
