// all optional
class Stark {
	name: string = "dein";
	static castle: string = "edo";
	deff: string;

	constructor() {
		this.deff = Stark.castle;
	}

	hello(person: string){
		console.log(person);
	}
}

var ned = new Stark ();

ned.saying = "summer"; // throw err not defined in stark.

console.log(ned.deff); // return edo

ned.hello("rob");