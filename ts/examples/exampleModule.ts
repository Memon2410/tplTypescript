/* permiten agrupar alguna lógica para que sea exportada y utilizada 
donde y cuando necesitemos, es un forma de crear aplicaciones 
escalables con cierto orden y un código fácil de mantener */
export module Shapes {
	interface IShape{
		type(): string;
	}
	export class Triangle implements IShape {
		type(): string{
			return "Triangle";
		}
	}
	export class Square implements IShape {
		type(): string{
			return "Square";
		}
	}
	//sólo es útil desde dentro del modulo
	class Circle implements IShape{
		type(): string{
			return "Circle";
		}
	}

	export function nameModule(): string{
		return "Shapes";
	};
}

// Example Validator
export module Validator{
	export class EmailValid{
		isValid(email: string): boolean{
			var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
			return re.test(email);
		}
	}
}