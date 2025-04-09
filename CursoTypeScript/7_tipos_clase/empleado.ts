// Parte 2: Uso de extend, sobreescritura de metodos en TypeScript
import { classPersona } from "./clase";

export class Empleado extends classPersona {
  public puesto: string;

  constructor(nombre: string, edad: number, esDesarrollador: boolean, puesto: string) {
    // super es para llamar al constructor de la clase padre 
    // ademas podemos hacer que todos los valores  de las propiedades del constructor padre 
    // puedan ser sobreescritos en caso de que yo lo agregue dentro de esta nueva clase
    super(nombre, edad, esDesarrollador); 
    this.puesto = puesto;
  }

  public saludar() {
    return `${super.saludar()} + " trabajo como " + ${this.puesto}`;
  }

  public obtenerInfo(): string {
    return `Tengo ${super.obtenerEdad()} años y trabajo como ${this.puesto}`;
  }
}

// Se puede instanciar y ejecutar aqui mismo pero no es recomendable ya que 
// buscamos que la clase sea agnostica para asi usarse en otros archivos
//let empleado = new Empleado("Christian", 39, true, "Desarrollador");
//console.log(empleado.saludar());

