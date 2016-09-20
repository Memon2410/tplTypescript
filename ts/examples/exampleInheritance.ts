/* debemos extender la class para heredar otra class | 'extends' */

class Vehicle {
	wheels:number;
	fuel: string;
	private color: string;
	constructor(wheels: number, fuel: string, color: string = 'White') {
		this.wheels = wheels;
		this.fuel = fuel;
		this.color = color;
	}
}

export class Car extends Vehicle {
	constructor() {
		super(1, "gasoil", 'Red');
	}
}

export class Motorcycle extends Vehicle {

}