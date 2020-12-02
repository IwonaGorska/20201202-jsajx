/**
 * b10-object-initialization
 * Explain
 *
 * #Cel:
 * W JS możemy definiować obiekty na różne sposoby, generalnie nie potrzeba w ogóle klasy, żeby zainicjować obiekt.
 * Wystarczą nam do tego znaki { } - to tak zwany: "literał obiektowy"
 * Jednak jak poradzić sobie w momencie, w którym potrzebujemy zachowanie rodem z klas?
 * Np. potrzebujemy zainicjować więcej niż jeden obiekt i posiadać konstruktor.
 */

let user8 = 'Michal';
let user9 = user8;

console.log(user8);
console.log(user9);

user9 = 'Krystyna'

console.log(user8);
console.log(user9);
 
const user3 = {
    name: 'Michal'
} 
const user4 = user3;

console.log(user3);
console.log(user4);

user4.name = 'Krystyna';
console.log(user3);
console.log(user4);


 
// 1) Najprostszym sposobem inicjalizacji ("konstruowania") nowych obiektów będzie - wykorzystanie funkcji
// Możemy zdefiniować tzw "factory function" która przy każdym wywołaniu - zwróci nowy obiekt.
function makePerson() {
	return {
		name: 'Michał',
		lastName: 'Kowalsky'
	}
}
// makePerson()
// makePerson()
// makePerson()
// makePerson()
// Ustalając odpowiednie parametry możemy symulować działanie a'la konstruktor:
function makePersonWith(name, lastName = 'Doe') {
	return {
		name,
		lastName
	}
}

// camelCase - pola + zmienne
// PascalCase - funkcja która z założenia ma być KONSTRUKTOREM
// SNAKE_CASE

// 2) Sposób kolejny to wykorzystanie słowa kluczowego `this` podczas DEKLARACJI funkcji
// Musimy wtedy funkcję wywołać ze słowem kluczowym `new` - inaczej złe rzeczy zadzieją się w naszej aplikacji
// Tutaj dostajemy faktyczny konstruktor - również możemy przekazywać parametry i dopisywać je do instancji
// `this` będzie tutaj reprezentowało instancję naszego nowo tworzonego obiektu.
function Person() {
    console.log(this.constructor.name === 'Person') // wyzancznik że ktoś prawidłowo wywołał tę funkcje z new
	 this.name = 'Michał';
	 this.lastName = 'Kowalsky';
}


// 3) Kolejny sposób to wykorzystanie lukru składniowego ze słowem kluczowym `class` - jest to najprzyjemniejsza opcja
// Jeśli tylko możemy skorzystać z syntaksu ES6 (lub możemy transpilować kod).
// Tutaj jeśli zapomnimy słowa kluczowego `new` przy tworzeniu instancji obiektów - zostaniemy o tym poinformowani.
// Dodatkowo - widzimy dokładnie gdzie jest konstruktor, i w prosty sposób możemy dopisywać metody
class MyPerson {
	 constructor () {
		 this.name = 'Michał';
		 this.lastName = 'Kowalsky';
     }
    //  constructor (name) {
    //     this.name = 'Michał';
    //     this.lastName = 'Kowalsky';
    // } W JS NIE MA Przeładowania metod i konstruktorów
}
// console.log(global.lastName);
// Nie jest konieczne używanie konstruktora, od jednej z wersji po ES6 deklaracja pól, może odbywać się poza konstruktorem
class MyOtherPerson {
	name = 'Michał';
    lastName = 'Kowalsky';
    constructor() {}
    
    shoutMyName() {
        return this.name
    }
}

// Należy wiedzieć iż zapis 3) to tak naprawdę "lukier składniowy".
// Pod spodem klasa dalej jest tworzona przez JS tak samo jak w przypadku nr 2. Jednak zapis 3) jest bezpieczniejszy.
// Warto przekopiować go sobie do np. https://babeljs.io/repl
// Zaznaczyć opcje es2015, stage-3 i zobaczyć jak mniej-więcej wygląda nasz kod pod spodem.

const person1 = makePerson();
const person2 = new Person();
const person3 = new MyPerson();
const person4 = new MyOtherPerson();


console.log(person4.shoutMyName());
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);

// Tylko korzystając z metod 2) i 3) Mamy dostęp do "czytelnego" dla nas konstruktora
console.log(person1.constructor.name);
console.log(person2.constructor.name);
console.log(person3.constructor.name);
console.log(person4.constructor.name);

// Istnienie w instancji pola `constructor` może wydawać Ci się dziwne.
// Nigdy nie definiowaliśmy takiego pola - a jednak mamy do niego dostęp.
// To wszystko wyjaśni się później - w momencie w którym powiemy więcej o prototypach i meta-programowaniu

// Na tym etapie możemy podejrzeć łańcuch dziedziczenia:
console.log(person1 instanceof Object)
console.log(person2 instanceof Person)
console.log(person3 instanceof MyPerson)
console.log(person4 instanceof Object, person4 instanceof MyOtherPerson)

// Ponieważ funkcja "dziedziczy" swój prototyp po - Object.
// Dodawanie pól i metod statycznych jest stosunkowo proste:

// Wyobraź sobie taką sytuację:
function Car(name = '', engine = 2.0) {
	this.name = name;
	this.engine = engine;
}
Car.has4Wheels = true;

// Możemy dalej przygotowywać instancje:
const myAudi = new Car('Audi', 2.2);
const myToyota = new Car('Toyota', 4);

console.log(myAudi)
console.log(myToyota)

// Klasa Car ma jednak jeszcze pole statyczne:
console.log(Car.has4Wheels)

// Na razie syntaks ES6 pozwala na dopisanie statycznych metod:
class MyStaticClass {
    // taki zapis pola nie jest (jeszcze) możliwy! 
    // JEST MOŻLIWY na Node 14.x
	// jednak odpowiednie ustawienie transpilera (Babel) umożliwia nam taki zapis
	static isSuperCool = true;

	// z metodą statyczną - nie ma problemu
	static showGreetings() {
		console.log('Hello World !')
	}
}
MyStaticClass.isSuperCool //?
MyStaticClass.showGreetings()

// Możemy też wykorzystując lukier składniowy osiągnąć dziedziczenie:
// Zapisy są podobne jak w innych językach OOP
// Jeśli chcemy wykorzystać konstruktor klasy pochodnej musimy odwołać się do klasy bazowej jako super();
class BaseClass {
	constructor (name) {
		this.name = name;
    }
    
    hello() {
        return 'ok...'
    }
}

class InheritedClass extends BaseClass {
	constructor (name, lastName) {
        super('');
        // this.name = name;
    }
    
    hello() {
        super.hello(); //?
    }
}

const mySampleInstance = new InheritedClass('Moss');
mySampleInstance.hello();
console.log(mySampleInstance.name);
console.log(mySampleInstance instanceof InheritedClass)
console.log(mySampleInstance instanceof BaseClass)
console.log(mySampleInstance instanceof Object)

// W tym układzie wydaje się że mamy pełen "koszyk" funkcjonalności,
// które swobodnie pozwalają nam pisać kodzik jako OOP (Object Oriented Programming).
// Jednak to tylko wstęp do tego paradygmatu.
// Musimy jeszcze powiedzieć sobie o dziedziczeniu oraz polach prywatnych w klasach.

// SPECYFIKA JS - Ciąg dalszy:
// Nie zależnie od tego jak utworzyliśmy obiekt w JS - jest on dynamiczny.
// Oznacza to że możemy dopisywać do niego nowe pola:

console.log(person4);
person4.age = 40;

console.log(person4);

// Oczywiście może to tworzyć tyle samo pożytku - co nieoczekiwanych zachowań w kodzie.
// Pójdźmy jednak jeszcze krok dalej z przypomnieniem sobie o niechlubnej nazwie "Hashmapa Hashmap".
// chodzi tutaj o możliwość nie tylko dynamicznego rozszerzenia obiektu o nowe pola
// ale również o to że można to zrobić po przez "DYNAMICZNE POLE ?!"

// wygląda to następująco:
person4['otherField'] = 'otherValue';
person4.otherField = 'otherValue';
console.log(person4);

// lub w wykorzystaniem stałej:
const key = 'my-illegal-key';
person4[key] = ':)';
console.log(person4);
console.log(person4['my-illegal-key']);

// Zauważ że zrobiliśmy coś co nie byłoby możliwe bez zapisu ze stringiem !!! - pole obiektu, jest teraz zapisane tak,
// jak nie mogłoby być zadeklarowane bez String'a !!! - nie można przecież w nazwie zmiennej/stałej/w polu użyć znaku '-'

// Po 2015 roku, możliwy jest też - zapis dający TEN SAM EFEKT - jednak już w momencie inicjalizacji obiektu,
// Zobacz:
const myOtherObject = {
	['someDynamicKey']: 'value'
}
console.log(myOtherObject);

// lub:
const age = 'myAge';
const user = {
	name: 'Michal',
	[age]: 30
}
console.log(user);

// Owszem, nikt nie chce sobie życia utrudniać i stosować takiego zapisu,
// Bardziej przydaje nam się to jeśli coś "dynamicznie" składamy i opakujemy to sobie w jakaś elegancką funkcję.

// jednak w rzeczywistych aplikacjach możesz spotkać się jeszcze z tzw. "Array Like" objects
// nie trzeba daleko szukać - wystarczy nam drzewo DOM - tam Nody są zwracane często w postaci obiektu "array like"

// Array like - czyli "prawie jak tablica".
// Obiekty tego typu zawierają pola jako indexy, mogą posiadać pole .length - zwracające wartość, jednak nie są
// iterowalne - tak jak tablica (nie zadziała na nie pętla for)

// przykład legalnego zapisu:
const arrayLike = {
	0: 'Hello',
	1: 'World',
	2: 'of',
	3: 'JavaScript',
	4: '!',
	length: 5
}

// takie odniesienie się do pola, nie jest możliwe:
// console.log(arrayLike.0)
// jednak możemy się dostać do wartości następująco:
console.log(arrayLike[0], arrayLike[1]);
