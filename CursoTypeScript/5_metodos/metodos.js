// Declaracion de funciones, tipado de parametros y valores de retorno
function imprimeMensaje(mensaje) {
    console.log(mensaje);
}
imprimeMensaje("Hola, soy un mensaje");
function sumar(a, b) {
    return a + b;
}
var resultado = sumar(10, 20);
console.log("Tu resultado es: ".concat(resultado));
console.log("Tu resultado es: ".concat(sumar(10, 20)));
