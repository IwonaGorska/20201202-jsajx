import { assertThat, countExecutionTime } from '../../j4b1-assert'
/**
 * d20-collection-api
 * Challenge
 *
 * Nasz legacy program traci na wydajności.
 * Niestety nie mamy możliwości wpłynąć na logikę działania tego programu w całości.
 *
 * Wyczytaliśmy o ciekawej technice tzw. memoizacji,
 * Za 1 razem, dla podanego argumentu - musi się to policzyć, trochę to potrwa,
 * Jednak za każdym kolejnym razem kiedy program wywołuje funkcję z tym samym argumentem
 * - chcemy żeby to przychodziło z cache.
 * - ten cache może obsługiwać Map(), przygotowane przez nas "memo"
 *
 * Pomóż nam - zaimplementuj taką funkcjonalność
 *
 * (Zadanie dodatkowe - na extra punkty!)
 * - Jeśli masz już wykonane zadanie, czy jesteś w stanie napisać bardziej generyczne rozwiązanie,
 *   gdzie wykorzystamy closure i fakt, że memo będzie wtedy prywatne? (działanie będzie to samo)
 *   Jeśli już skończyłaś(eś) zadanie - spróbuj popracować z closure + Map()
 *   PS. Jest to zadanie dodatkowe, testy nie są pod nie napisane.
 *       Możesz samodzielnie je napisać korzystając z countExecutionTime callback.
 *
 * * Reguły:
 * - nie możesz usuwać istniejącego kodu
 * - możesz jedynie dodawać nowy kod
 */
const memo = new Map();
// 1 1
// X 👍


// Specjalnie nazwa zmieniona dla celów memoize
function longComputation3(fromNumber) {
	let result = fromNumber;

	// Możesz dodawać kod tylko w obrębie tej właśnie funkcji.
    // if(memo.has(fromNumber)) {
    //     return memo.get(fromNumber);
    // }
    
	// Tej pętli nie można ruszać!
	for(let i = 0; i <= 1000000; i++) {
		result += i;
	}

    // memo.set(fromNumber, result);

	// Ta funkcja musi zwracać wynik (tego nie ruszaj):
	return result;
}

// Kolejne wykorzystanie closure
// UWAGA: cache działa tylko dla 1wszego argumentu
function memoize(myFunction) {
    const memo = new Map();
    return (arg, ...rest) => {
        console.log(arg);
        if(memo.has(arg)) {
            return memo.get(arg);
        }
        const result = myFunction(arg, ...rest);
        memo.set(arg, result);
        return result;
    }
}
// Nie trzeba tego pisać samemu zobacz:
// https://lodash.com/docs/4.17.15#memoize

const longComputation = memoize(longComputation3);

// #Reguła:
// Nie możesz zmieniać kodu poniżej:

const executionTime1 = countExecutionTime(() => {
	longComputation(1000);
})
const executionTime2 = countExecutionTime(() => {
	longComputation(1000);
})
console.log(executionTime1)
console.log(executionTime2)


assertThat(
	'Should return second count time lower than 2 milliseconds',
	expect => expect(executionTime2).toBeLowerThan(10)
)  //?


const anotherExecutionTime1 = countExecutionTime(() => {
	longComputation(20);
})
const anotherExecutionTime2 = countExecutionTime(() => {
	longComputation(20);
})

console.log(anotherExecutionTime1)
console.log(anotherExecutionTime2)

assertThat(
	'Should return second count time lower than 6 milliseconds',
	expect => expect(anotherExecutionTime2).toBeLowerThan(10)
)  //?
