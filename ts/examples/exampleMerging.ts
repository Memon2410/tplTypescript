/* permite unir componentes, lo podemos hacer con módulos, 
clases, interfaces, funciones y variables */
//interfaces
export interface Person{
	name: string;
	age: number;
}
 
export interface Person {
	hobbies: Array<string>;
	profession: string;
}

//modules
export module Vehicle{
	export class Car{
		getProperties(): string{
			return "Numwheels: 4, fueltype: oil";
		}
	}
}
 
export module Vehicle{
	export class Motorclycle{
		getProperties(): string{
			return "Numwheels: 2, fueltype: gasoline";
		}
	}
}

//modules - enums
export enum ColorMerging {
	red = 1,
	green = 2,
	blue = 4
}
 
export module ColorMerging {
	export function mixColor(colorName: string) {
		if (colorName == "yellow") {
			return ColorMerging.red + ColorMerging.green;
		}
		else if (colorName == "white") {
			return ColorMerging.red + ColorMerging.green + ColorMerging.blue;
		}
		else if (colorName == "magenta") {
			return ColorMerging.red + ColorMerging.blue;
		}
		else if (colorName == "cyan") {
			return ColorMerging	.green + ColorMerging.blue;
		}
	}
}