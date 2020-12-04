/**
 * d10-filter-map-reduce
 * Explain
 *
 * #Cel:
 * Przypomnienie podstawowych metod tablicowych, które nie mutując danych - pozwalają na ich transformację.
 */

// Programowanie funkcyjne z użyciem metod tablicowych najczęściej wykorzystuje się do transformacji danych.
// Niewątpliwą zaletą metod: map / filter / reduce - jest możliwość ich "chain'owania" - łączenia
// i wywoływania jedna po drugiej.

// Mapowanie
// Transformacja elementów
const array1 = [1,2,3,4,5];
const mapped = array1.map(nr => Math.pow(nr, 2)); // Math.pow(nr, 2) === nr ** 2
const mapped2 = array1.map(function(nr) { return Math.pow(nr, 2) }); // Math.pow(nr, 2) === nr ** 2
console.log(array1);
console.log(mapped);
console.log(mapped2);

// Filtrowanie
// Zmiana ilości elementów
const array2 = [1,2,3,4,5];
const oddNumbers = array2.filter(() => true);//.map(() => {}).map(() => {});
console.log(array2);
console.log(oddNumbers);
console.log(oddNumbers === array2);

// "Redukcja" elementów
// Gdzie map i filter nie może tam reduce pośle!
const sumOfElements = [1,2,3,4,5].reduce((acc, value) => acc + value);
console.log(sumOfElements);

// Rozważmy następujący przykład:
// Podsumowanie wartości wszystkich operacji uznania na koncie:

const cashBalance = [
	{id: 5, cash: 100, type: 'IN'},
	{id: 4, cash: -300, type: 'OUT'},
	{id: 3, cash: -1200, type: 'OUT'},
	{id: 2, cash: 400, type: 'IN'},
	{id: 1, cash: 2000, type: 'IN'},
]

cashBalance.filter((operation) => operation.type === 'IN') //?
cashBalance.filter((operation) => operation.type === 'IN').map(o => o.cash) //?
cashBalance.filter((operation) => operation.type === 'IN').map(o => o.cash).reduce((a, b) => a + b); //?

const inCash = cashBalance.filter((operation) => operation.type === 'IN').map(o => o.cash).reduce((a, b) => a + b);
console.log(inCash);

// Korzystając z bardziej funkcyjnego podejścia można to zapisać bardziej przejrzyście:

const operationTypeIn = o => o.type === 'IN';
const pluckCash = o => o.cash;
const sum = (a, b) => a + b;
console.log( cashBalance.filter(operationTypeIn).map(pluckCash).reduce(sum) );

// Teraz nasze małe pomocnicze funkcje są re-używalne, możemy szybko policzyć aktualny stan konta
const currentBalance = cashBalance.map(pluckCash).reduce(sum);
console.log(currentBalance);

// Dodając dodatkowy filtr - możemy policzyć obciążenia:
const operationTypeOut = o => o.type === 'OUT';
console.log( cashBalance.filter(operationTypeOut).map(pluckCash).reduce(sum) );

// Ilość przykładów można mnożyć:
// 1 Policz ilość wszystkich operacji IN:
console.log( cashBalance.filter(operationTypeIn).length )

// 2 Policz ilość wszystkich operacji OUT:
console.log( cashBalance.filter(operationTypeOut).length )

// 3 Odtwórz stan konta po 3 operacji:
const idLowerOrEqual3 = o => o.id <= 3;
console.log( cashBalance.filter(idLowerOrEqual3).map(pluckCash).reduce(sum) )
