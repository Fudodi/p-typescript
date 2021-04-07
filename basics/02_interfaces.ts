// we can define expected return value in TS.

// address is optional value below.
interface Stark {
	name: string;
	age: number;
	address?: string;
}

function printName(stark : Stark) {
	console.log(stark.name);
}

printName({name:"eddard"}); // throw err! no age!
printName({label:"joe"}); // throw err!
printName({name:"joe", age:20}); // pass!
