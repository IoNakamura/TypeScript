// Restricciones con extends, genericos en interfaces
var cadenaTexto = "Christian Camilo Contar";
console.log(cadenaTexto.length);
function obtenerLongitud(objeto) {
    var longitud = objeto.length;
    var tipo = typeof objeto;
    console.log("Tipo de dato: ".concat(tipo, ", y la Longitud es: ").concat(longitud));
    return objeto.length;
}
console.log(obtenerLongitud("Cadena"));
console.log(obtenerLongitud([1, 2, 3, 4, 5]));
console.log(obtenerLongitud({ length: 10 }));
