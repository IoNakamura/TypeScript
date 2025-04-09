// Creacion de clases y constructores en TypeScript
export class classPersona {
  nombre: string;
  edad: number;
  esDesarrollador: boolean;

  constructor(nombre: string, edad: number, esDesarrollador: boolean) {
    this.nombre = nombre;
    this.edad = edad;
    this.esDesarrollador = esDesarrollador;
  }
  
  saludar() {
    console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
  }
}

//let persona2 = new classPersona("Christian", 39, true);
//persona2.saludar();


