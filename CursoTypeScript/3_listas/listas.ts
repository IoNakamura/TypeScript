//Arrays, Tuplas, Enums - Enumeradores
//Crear un array de tipo strings

let nombres: string[] = ["Juan", "Maria", "Christian", "Ana"];
console.log("Nombres: ", nombres);
nombres.push("Jaime");
console.log("Nombres: ", nombres);

let edades: number[] = [39, 25, 30];
console.log("Edades: ", edades);
edades.push(12);
console.log("Edades nuevo: ", edades);

let mixto: any[] = ["Christian", 39, true];
console.log("Mixto: ", mixto);
mixto.push("Hola");
mixto.push(false);
console.log("Mixto: ", mixto);
console.log("===============================");

//Arreglo de tipo interfaz
interface Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
}

let personas: Persona[] = [
  {nombre: "Christian", edad: 39, esDesarrollador: true},
  {nombre: "Maria", edad: 30, esDesarrollador: true},
  {nombre: "Ana", edad: 20, esDesarrollador: false},
];

console.log("Personas: ", personas);

personas.push({nombre: "Jaime", edad: 42, esDesarrollador: false});
console.log("Personas: ", personas);
console.log("===============================");

// Tupla | La tupla no puede modificarse
//let personasTupla: [string, number, boolean];
let persona: [string, number, boolean];
persona = ["Christian", 39, true];
console.log("Persona: ", persona);
console.log("===============================");
let personasTupla: [string, number, boolean][] = [];
personasTupla.push(["Christian", 39, true]);
personasTupla.push(["Maria", 30, true]);
personasTupla.push(["Ana", 20, false]);

personasTupla.forEach((tupla) => {
  console.log("Nombre en foreach: ", tupla);

  let nombre: string = tupla[0];
  let edad: number = tupla[1];
  let esDesarrollador: boolean = tupla[2];

  console.log("DATA - Nombre: ", nombre, "Edad: ", edad, "Es desarrollador: ", esDesarrollador, "Fin");
});

// Enumeradores
console.log("============== Enumeradores =================");

enum DiaDeLaSemana {
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
}

let dia: DiaDeLaSemana = DiaDeLaSemana.Jueves;
console.log("Dia: ", dia); // 3
console.log("Dia: ", DiaDeLaSemana[dia]);
console.log("===============================");

enum RolUsuario {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

let rol: RolUsuario = RolUsuario.User;
console.log("Rol: ", rol);
console.log("Rol: ", rol); // Solo mostramos el valor directamente


enum Mezclas {
  ID = 12,
  Nombre = "Jaime"
}

console.log(Mezclas.ID);
console.log(Mezclas.Nombre);


