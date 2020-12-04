import { assertThat } from '../../j4b1-assert'
/**
 * d10-filter-map-reduce
 * Challenge
 *
 *  W naszej złożonej aplikacji część komponentów, potrzebuje danych w specjalnej formie,
 *  aby je poprawnie wyświetlić.
 *
 *  Postaraj się wykorzystać programowanie funkcyjne do osiągnięcia odpowiedniego formatu danych,
 *  tak aby każdy z komponentów mógł je obsługiwać.
 *
 * * Reguły:
 * - nie zmieniaj danych które przychodzą z pseud-backendu bezpośrednio na tablicy (nie ruszaj backendApiRequest)
 * - w przestrzeni tego scope muszą się zanjdować showNamesOnly, showWomanNamesOnly, showEmailsWithDomainSiteCom
 *   zawierające odpowiednio tablice z wynikami działań.
 * - zastosuj odpowiednie metody tablicowe aby uzyskać wyniki.
 */

// Nie zmieniaj tego kodu:
const backendApiRequest = () => [
	'adrian@site.com',
	'stefan@site.com',
	'jadwiga@domain.pl',
	'henryka@domain.pl',
	'anna@site.com'
];
const emailData = backendApiRequest();

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function pluckNameFormEmail(email, idx) {
    const [name = '', domain] = email.split('@');    
    // console.log(idx);
    return name;
}

function isAWomanName(name) {
    // 
    return name.toLowerCase().charAt(name.length - 1) === 'a'
}

function isEmailFromSiteCom(email) {
    const [name, domain] = email.split('@');    
    // console.log(idx);
    return domain === 'site.com';
}

function isEmailFromSite(siteDomain) {
    return (email) => {
        const [name, domain] = email.split('@');    
        return domain === siteDomain;
    }
}

isAWomanName('Michał') //?
isAWomanName('Anna') //?

// Tutaj możesz pisać:
// const showNamesOnly = emailData.map(email => email.split('@')[0]).map(capitalize);
// const showNamesOnly = emailData.map((email) => pluckNameFormEmail(email)).map(capitalize);
const showNamesOnly = emailData.map(pluckNameFormEmail).map(capitalize);
const showWomanNamesOnly = emailData.map(pluckNameFormEmail).filter(isAWomanName).map(capitalize);;
const showEmailsWithDomainSiteCom = emailData.filter(isEmailFromSite('site.com'));


// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'First component should consume data as Capitalized names',
	expect => expect(showNamesOnly).toEqual(['Adrian', 'Stefan', 'Jadwiga', 'Henryka', 'Anna'])
)  //?

assertThat(
	'Second component should consume data as Woman names only',
	expect => expect(showWomanNamesOnly).toEqual(['Jadwiga','Henryka','Anna'])
)  //?

assertThat(
	'Third component should have @site.com emails as data provided',
	expect => expect(showEmailsWithDomainSiteCom).toEqual(['adrian@site.com','stefan@site.com','anna@site.com'])
)  //?
