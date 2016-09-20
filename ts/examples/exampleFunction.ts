/*  son lo mismo que en javascript, la principal diferencia, son 
 los tipos, pueden tener argumentos tipados y devolver un tipo 
 de dato o no devolver nada (void) */
// Parameters
export function sum(a: number, b: number): number {
	return a + b;
}
 
export let varSum: (a: number, b: number)=> number=
	function(a: number, b: number): number {
		return a + b;
	}

// Optional Parameters
export function vehicleComponents(wheels: number, fuel: string, color?: string): string {
	if(color) {
		return "Wheels: " + wheels + ", fuel: " + fuel + ", color: " + color;
	} else {
		return "Wheels: " + wheels + ", fuel: " + fuel;
	}
}

// Spread | ES6
// El operador Spread(…) aparece con ecmascript 6 y sirve para decirle a un método
// o función el resto de parámetros sin que todos ellos sean definidos.
export function vehicleComponentsSpread(wheels: number, fuel: string, ...moreData: string[]): string {
	return "Wheels: " + wheels + ", fuel: " + fuel + ", moreData: " + moreData.join(", ");
}