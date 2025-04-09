// Creacion y uso de interfaces en TypeScript
var desarrolladorPersona = {
    nombre: "Christian",
    edad: 20,
    esDesarrollador: true,
};
console.log("Persona: ", desarrolladorPersona);
var personasArray = [
    { nombre: "Christian", edad: 39, esDesarrollador: true },
    { nombre: "Maria", edad: 30, esDesarrollador: true },
    { nombre: "Ana", edad: 20, esDesarrollador: false },
];
console.log("Personas: ", personasArray);
console.log("============== Interfaz con metodos establecidos =================");
var sumar2 = function (a, b) {
    return a + b;
};
var sumar3 = function (a, b) { return a + b; };
console.log("El resultado de Sumar2: ", sumar2(10, 20));
console.log("El resultado de Sumar3: ", sumar3(5, 10));
