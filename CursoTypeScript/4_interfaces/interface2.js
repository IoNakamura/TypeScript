var direccion = {
    calle: "Calle Falsa",
    numero: 123,
    //ciudad: "Springfield",
};
console.log("Direccion: ", direccion);
var personaLeer = {
    nombre: "Christian",
    edad: 24,
    esDesarrollador: true
};
console.log("Persona: ", personaLeer);
// Esto va a causar un error
//personaLeer.nombre = "Juan";
console.log("=============== Interfaz extentida ================");
var empleadoLeer = {
    nombre: "Christian",
    edad: 24,
    esDesarrollador: true,
    puesto: "Desarrollador Senior"
};
console.log("Empleado: ", empleadoLeer);
