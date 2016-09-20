/* permiten crear contratos que otras clases deben firmar para 
poder utilizarlos, podemos implementar más de una interfaz en la misma clase. */

// One interface
interface IUser{
	name: string;
	getName(): string;
}

export class UserInterface implements IUser {
	name: string;
		constructor(name: string) {
		this.name= name;
	}
	getName(): string{
		return this.name;
	}
}

// Two interfaces
interface ClockInterface {
	currentTime: Date;
}
 
interface ClockInterfaceMethods {
	getTime(): Date;
	getHour(): number;
	getMinute(): number;
}
 
export class Clock implements ClockInterface, ClockInterfaceMethods  {
	currentTime: Date;
	constructor() {
		this.currentTime = new Date();
	}
	getTime(): Date{
		return this.currentTime;
	}

	getHour(): number{
		return this.currentTime.getHours();
	}

	getMinute(): number{
		return this.currentTime.getMinutes();
	}
}
