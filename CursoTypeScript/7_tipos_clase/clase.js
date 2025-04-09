"use strict";
// Modificadores de acceso (public, private, proyected) en typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.classPersona = void 0;
var classPersona = /** @class */ (function () {
    function classPersona(nombre, edad, esDesarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }
    classPersona.prototype.saludar = function () {
        this.esDev(); //Se puede llamar un metodo privado desde un metodo publico ya que es el mismo objeto
        return "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.";
    };
    classPersona.prototype.obtenerEdad = function () {
        return this.edad;
    };
    classPersona.prototype.esDev = function () {
        return this.esDesarrollador;
    };
    return classPersona;
}());
exports.classPersona = classPersona;
//let persona2 = new classPersona("Christian", 39, true);
//persona2.saludar();
