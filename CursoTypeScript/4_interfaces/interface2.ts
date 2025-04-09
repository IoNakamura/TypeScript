// Propiedades opcionales, readonly, extension de interfaces en TypeScript
interface Direccion {
  calle: string;
  numero: number;
  ciudad?: string;
}

let direccion: Direccion = {
  calle: "Calle Falsa",
  numero: 123,
  //ciudad: "Springfield",
};

console.log("Direccion: ", direccion);

// Read only
interface PersonaReadonly {
  readonly nombre: string;
  readonly edad: number;
  readonly esDesarrollador: boolean;
}

let personaLeer: PersonaReadonly = {
  nombre: "Christian",
  edad: 24,
  esDesarrollador: true
}

console.log("Persona: ", personaLeer);
// Esto va a causar un error
//personaLeer.nombre = "Juan";


console.log("=============== Interfaz extentida ================");

interface Empleado extends PersonaReadonly {
  readonly puesto: string;
}

let empleadoLeer: Empleado = {
  nombre: "Christian",
  edad: 24,
  esDesarrollador: true,
  puesto: "Desarrollador Senior"
}

console.log("Empleado: ", empleadoLeer);
