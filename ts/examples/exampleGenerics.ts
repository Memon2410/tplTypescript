/* permiten no establecer un tipo concreto a algo, variable,
propiedad, método, clase etc <T>*/
// Vars
export function anyType<T>(data: T): T {
	return data;
}

// Classes
export class AllTypes<T>{
	sum: (a: T, b: T) => T;
}