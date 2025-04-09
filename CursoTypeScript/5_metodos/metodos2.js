// Parametros opcionales, valores por defecto y sobrecarga de funciones
function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre, "! :D ");
    }
    else {
        return "Hola, ".concat(nombre, " \u00AC\u00AC\"");
    }
}
console.log(saludar("Christian"));
console.log(saludar("Christian", "Buenos dias"));
console.log("============= Parametros multiples ==================");
// Parametros multiples
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acumulados, numero) { return acumulados + numero; }, 0);
}
console.log("Suma de todos los numeros: ", sumarTodos(1, 2, 3, 4, 5));
// Valores por defecto
console.log("============= Valores por defecto ==================");
function despedir(nombre, despedida) {
    if (despedida === void 0) { despedida = "Adios"; }
    return "".concat(despedida, ", ").concat(nombre, "! :D");
}
console.log(despedir("Christian"));
console.log(despedir("Christian", "Hasta luego"));
