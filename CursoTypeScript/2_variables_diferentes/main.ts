// Variable tipo any
let variableAny: any;

//variableAny = "Hola";
//variableAny = 10;
variableAny = true;

console.log("Valor de variable any: ", variableAny);

// Variable tipo unknown
let variableDesconocida: unknown;

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

function logMessage(message: string): void {
    console.log("Log Mensaje: ", message);
}

logMessage("Este es un mensaje de log");