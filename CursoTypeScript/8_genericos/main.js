function identity(arg) {
    return arg;
}
var output = identity("Hola");
console.log("Output 1: ", output);
var output2 = identity(123);
console.log("Output 2: ", output2);
var Caja = /** @class */ (function () {
    function Caja(contenido) {
        this.contenido = contenido;
    }
    Caja.prototype.obtenerContenido = function () {
        return this.contenido;
    };
    return Caja;
}());
var cajaDeString = new Caja("Libros");
console.log("Contenido de la caja de string: ", cajaDeString.obtenerContenido());
var cajaDeNumberos = new Caja(123);
console.log("Contenido de la caja de numeros: ", cajaDeNumberos.obtenerContenido());
var cajaDeInterfaz = new Caja({
    marca: "Toyota",
    modelo: "Corolla",
    fechaFabricacion: new Date("2020-01-01"),
    kilometraje: 10000
});
console.log("Contenido de la caja de interfaz: ", cajaDeInterfaz.obtenerContenido());
