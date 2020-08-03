class Person {
	name: string;
	constructor(name:string) {
		this.name = name;
	}
	dance(){
		console.log(this.name + "is dancing");
	}
}

var bran = new Person("bran");
bran.dance(); // console returns... bran is dancing!

class AwesomePerson extends Person {
	// dont need define name or any constructor
	dance(){
		console.log("so awesome!");
		// to use inherited function, call super
		super.dance();
	}
}

var robb = new AwesomePerson("robb");
robb.dance(); // console returns... so awesome! robb is dancing
