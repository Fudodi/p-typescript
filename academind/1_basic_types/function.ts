// Function return Types & void

function printResunt(num: number): void {
    console.log(num);
}

// use callback
function addAndHandle(num: number, callback: (num:number) => void): number {
    console.log(callback(num));
    return 5;
}

// use arrow function
const arrowFunc = (num: number, str: string): void => {
    console.log(num + str);
}