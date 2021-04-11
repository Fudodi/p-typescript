
// spread operator
const hobbies = ['hiking', 'cooking'];
const fruit = ['apple', ...hobbies];

// rest parameters convert inputs into array
const add = (...numbers: number[]) => {
    return numbers.reduce((curresult, curvalue) => {
        return curresult + curvalue;
    }, 0);
}

const addedNumbers = add(5, 1, 3, 3);
