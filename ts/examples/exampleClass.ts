/* Tienen propiedades, constructor, los métodos pueden 
devolver tipos o nada (void) */
export class User {
	id: number;
	name: string;
	email: string;
	hobbies: Array<string>;

	constructor(id: number, name: string, email: string, hobbies: Array<string>) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.hobbies = hobbies;
	}
}