"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classPersona = void 0;
var classPersona = /** @class */ (function () {
    function classPersona(nombre, edad, esDesarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }
    classPersona.prototype.saludar = function () {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    };
    return classPersona;
}());
exports.classPersona = classPersona;
//let persona2 = new classPersona("Christian", 39, true);
//persona2.saludar();
