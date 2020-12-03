/**
 * b31-prototype-chain
 * Explain
 *
 * Aby sprawdzić przykład - należy kolejno odkomentowywać kod.
 *
 * #Cel:
 * Sprawdzenie jak łańcuch prototypów zachowuje się jeśli mamy do czynienia z dziedziczeniem.
 * Sposób i kolejność poszukiwania metod przez JavaScript w przypadku użycia `.prototype`
 *
 */

// Klasa bazowa
class Vehicle {
	constructor (name = '') {
		this.name = name;
	}
	shoutMyName() {
		console.log(this.name);
	}
}

// Klasa która dziedziczy po klasie bazowej
class Car extends Vehicle {

	constructor (name = '') {

		super(name);
	}

	// shoutMyName() {
	// 	console.log(this.name);
	// }
}

// Vehicle.prototype.shoutMyName = function() {
// 	console.log(this.name);
// };

// Car.prototype.shoutMyName = function() {
// 	console.log(this.name);
// };

const car = new Car('Audi');
console.log(car);

car.shoutMyName() //? 'Hello Audi !'
// Car.prototype.shoutMyName() || myCar.shoutMyName() || Vehicle.prototype.shoutMyName() || baseClass.shoutMyName()

