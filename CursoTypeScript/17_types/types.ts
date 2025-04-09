// Introduccion a types en typescript
// Los tipos Type pueden tener variables pero no tener metodos
type PersonaType = {
  nombre: string;
  edad: number;
}

/*
  Esta clase fue creada solo para verlas diferencias
class PersonaClass {
  nombre: string;
  edad: number

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
}*/

// Matt types 
//Parcial va a ejecutar un ciclo dentro de todos los argumentos que se le pasen
//este ciclo va hacer que todas las propiedades dentro de un type va a tener agregado un signo de interrogacion permitiendo 
// valores nulos
type Parcial<T> = {
  [P in keyof T]?: T[P];
}

//PersonaParcial va a tener todas las propiedades de PersonaType pero con un signo de interrogacion
type PersonaParcial = Parcial<PersonaType>;
/*
  El mapped type de PersonaParcial es:
  PersonaParcial = 
  {
    nombre?: string;
    edad?: number;
  }
    Con el fin de que todos sus valores respondan a un patron particular
*/

// Otra cosa que se peude hacer es que en lugar que los valores sean nulos, podria hacer
// que todos su valores sean solo lectura
type SoloLectura<T> = {
  readonly [P in keyof T]: T[P];
}

type PersonaSoloLectura = SoloLectura<PersonaType>;
/*
  El mapped type de PersonaSoloLectura es:
  PersonaSoloLectura = 
  {
    readonly nombre: string;
    readonly edad: number;
  }
*/

 let personaSoloLectura: PersonaSoloLectura = {
  nombre: "Jaime",
  edad: 20
 }

 console.log(personaSoloLectura);

// Template Literal types
// Crear variantes de un mismo elemento
type Variantes = "Pequeño" | "Mediano" | "Grande";
type ClasesCSS = `btn-${Variantes}`;

let btnPequeno: ClasesCSS = "btn-Pequeño";
let btnMediano: ClasesCSS = "btn-Mediano";
let btnGrande: ClasesCSS = "btn-Grande";

console.log(btnPequeno, btnMediano, btnGrande);

//Condicional types
// Operador terciario
//type EsNumero<T> = T extends number ? "Es un numero" : "No es un numero";
type EsNumero<T> = T extends number ? true : false;

//Esta funcion es de tipo T, y esta funcion va a recibir un argumento de tipo T
//y va a retornar un tipo EsNumero<T>
function esNumero<T>(valor: T): EsNumero<T> {
  return (typeof valor === 'number') as EsNumero<T>;
}

const result1 = esNumero(123);
const result2 = esNumero("Hola");

console.log(result1, result2);

// Intersection types

