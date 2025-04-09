// Declaracion de funciones, tipado de parametros y valores de retorno

function imprimeMensaje(mensaje: string): void {
  console.log(mensaje)
}

imprimeMensaje("Hola, soy un mensaje");


function sumar(a: number, b: number): number {
  return a + b;
}

let resultado: number = sumar(10, 20);
console.log(`Tu resultado es: ${resultado}`);
console.log(`Tu resultado es: ${sumar(10, 20)}`);


