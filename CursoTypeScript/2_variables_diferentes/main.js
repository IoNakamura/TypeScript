// Variable tipo any
var variableAny;
//variableAny = "Hola";
//variableAny = 10;
variableAny = true;
console.log("Valor de variable any: ", variableAny);
// Variable tipo unknown
var variableDesconocida;
variableDesconocida = "Hola";
//variableDesconocida = 10;
//variableDesconocida = true;
if (typeof variableDesconocida === "string") {
    console.log("Valor de variable unknown: ", variableDesconocida);
}
/*function throwError(message: string): never {
    throw new Error(message);
}

throwError("Este es un error");*/
function logMessage(message) {
    console.log("Log Mensaje: ", message);
}
logMessage("Este es un mensaje de log");
