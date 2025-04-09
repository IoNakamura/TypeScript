// https://legacy.reactjs.org/docs/hooks-reference.html#usestate
const prices: number[] = [1, 2, 3, 4, 5]; // Array de números
const prices2: (number | string)[] = [1, 2, 3, 'Ana', 5]; // Array de números y strings

prices2.push(2); // Agrega un número al array
console.log(prices2); // Imprime el array

//const user: [string, number] = ["JaimilloElPillo", 69];  // Tupla de string y número

//let user: [string, number];
let user: [string, number, boolean];
//user = ["JaimilloElPillo", 69];
//user = ["12", 12];
//
//user = [];
//user = ['Maria'];
//user = ['Juan', 12];
user = ['Dario', 20, true];

const [username, age] = user; // Desestructuración de la tupla
console.log(username, age);
