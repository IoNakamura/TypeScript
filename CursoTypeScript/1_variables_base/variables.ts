// Variable tipo cadena de texto
let nombre: string = "Christian";
let edad: number = 20;
let esDesarrollador: boolean = true;
let mes: string | undefined;
let variableNull: null = null;

console.log("Mes inicial:", mes);

mes = "Enero";
console.log("Mes actualizado:", mes);

console.log("Hello, " + nombre);
console.log(`Hello, ${nombre}`);

// Variable tipo numero
let a: number = 1;
let b: number = 2;
let c: number = a + b;
console.log(c);