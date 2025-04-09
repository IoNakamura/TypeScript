// Creacion y uso de interfaces en TypeScript

interface Persona {
  nombre: string;
  edad: number;
  esDesarrollador: boolean;
}

let desarrolladorPersona: Persona = {
  nombre: "Christian",
  edad: 20,
  esDesarrollador: true,
};

console.log("Persona: ", desarrolladorPersona);

let personasArray: Persona[] = [
  {nombre: "Christian", edad: 39, esDesarrollador: true},
  {nombre: "Maria", edad: 30, esDesarrollador: true},
  {nombre: "Ana", edad: 20, esDesarrollador: false},
];

console.log("Personas: ", personasArray);

console.log("============== Interfaz con metodos establecidos =================");

interface Sumar{
  (a: number, b: number): number;
}

let sumar2: Sumar = (a: number, b: number): number => {
  return a + b;
}

let sumar3: Sumar = (a, b) => a + b;

console.log("El resultado de Sumar2: ", sumar2(10, 20));
console.log("El resultado de Sumar3: ", sumar3(5, 10));


