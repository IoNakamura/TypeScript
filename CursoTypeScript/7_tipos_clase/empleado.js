"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
// Parte 2: Uso de extend, sobreescritura de metodos en TypeScript
var clase_1 = require("./clase");
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, esDesarrollador, puesto) {
        // super es para llamar al constructor de la clase padre 
        // ademas podemos hacer que todos los valores  de las propiedades del constructor padre 
        // puedan ser sobreescritos en caso de que yo lo agregue dentro de esta nueva clase
        var _this = _super.call(this, nombre, edad, esDesarrollador) || this;
        _this.puesto = puesto;
        return _this;
    }
    Empleado.prototype.saludar = function () {
        return "".concat(_super.prototype.saludar.call(this), " + \" trabajo como \" + ").concat(this.puesto);
    };
    Empleado.prototype.obtenerInfo = function () {
        return "Tengo ".concat(_super.prototype.obtenerEdad.call(this), " a\u00F1os y trabajo como ").concat(this.puesto);
    };
    return Empleado;
}(clase_1.classPersona));
exports.Empleado = Empleado;
// Se puede instanciar y ejecutar aqui mismo pero no es recomendable ya que 
// buscamos que la clase sea agnostica para asi usarse en otros archivos
//let empleado = new Empleado("Christian", 39, true, "Desarrollador");
//console.log(empleado.saludar());
