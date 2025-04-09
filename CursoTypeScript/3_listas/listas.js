//Arrays, Tuplas, Enums - Enumeradores
//Crear un array de tipo strings
var nombres = ["Juan", "Maria", "Christian", "Ana"];
console.log("Nombres: ", nombres);
nombres.push("Jaime");
console.log("Nombres: ", nombres);
var edades = [39, 25, 30];
console.log("Edades: ", edades);
edades.push(12);
console.log("Edades nuevo: ", edades);
var mixto = ["Christian", 39, true];
console.log("Mixto: ", mixto);
mixto.push("Hola");
mixto.push(false);
console.log("Mixto: ", mixto);
console.log("===============================");
var personas = [
    { nombre: "Christian", edad: 39, esDesarrollador: true },
    { nombre: "Maria", edad: 30, esDesarrollador: true },
    { nombre: "Ana", edad: 20, esDesarrollador: false },
];
console.log("Personas: ", personas);
personas.push({ nombre: "Jaime", edad: 42, esDesarrollador: false });
console.log("Personas: ", personas);
console.log("===============================");
// Tupla | La tupla no puede modificarse
//let personasTupla: [string, number, boolean];
var persona;
persona = ["Christian", 39, true];
console.log("Persona: ", persona);
console.log("===============================");
var personasTupla = [];
personasTupla.push(["Christian", 39, true]);
personasTupla.push(["Maria", 30, true]);
personasTupla.push(["Ana", 20, false]);
personasTupla.forEach(function (tupla) {
    console.log("Nombre en foreach: ", tupla);
    var nombre = tupla[0];
    var edad = tupla[1];
    var esDesarrollador = tupla[2];
    console.log("DATA - Nombre: ", nombre, "Edad: ", edad, "Es desarrollador: ", esDesarrollador, "Fin");
});
// Enumeradores
console.log("============== Enumeradores =================");
var DiaDeLaSemana;
(function (DiaDeLaSemana) {
    DiaDeLaSemana[DiaDeLaSemana["Lunes"] = 0] = "Lunes";
    DiaDeLaSemana[DiaDeLaSemana["Martes"] = 1] = "Martes";
    DiaDeLaSemana[DiaDeLaSemana["Miercoles"] = 2] = "Miercoles";
    DiaDeLaSemana[DiaDeLaSemana["Jueves"] = 3] = "Jueves";
    DiaDeLaSemana[DiaDeLaSemana["Viernes"] = 4] = "Viernes";
})(DiaDeLaSemana || (DiaDeLaSemana = {}));
var dia = DiaDeLaSemana.Jueves;
console.log("Dia: ", dia); // 3
console.log("Dia: ", DiaDeLaSemana[dia]);
console.log("===============================");
var RolUsuario;
(function (RolUsuario) {
    RolUsuario["Admin"] = "ADMIN";
    RolUsuario["User"] = "USER";
    RolUsuario["Guest"] = "GUEST";
})(RolUsuario || (RolUsuario = {}));
var rol = RolUsuario.User;
console.log("Rol: ", rol);
console.log("Rol: ", rol); // Solo mostramos el valor directamente
var Mezclas;
(function (Mezclas) {
    Mezclas[Mezclas["ID"] = 12] = "ID";
    Mezclas["Nombre"] = "Jaime";
})(Mezclas || (Mezclas = {}));
console.log(Mezclas.ID);
console.log(Mezclas.Nombre);
