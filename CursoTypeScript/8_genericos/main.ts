// Introduccion a lo genericos en TypeScript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hola");
console.log("Output 1: ", output);

let output2 = identity<number>(123);
console.log("Output 2: ", output2);

class Caja<T> {
  contenido: T;

  constructor(contenido: T) {
    this.contenido = contenido;
  }

  public obtenerContenido(): T {
    return this.contenido;
  }
}

let cajaDeString = new Caja<string>("Libros");
console.log("Contenido de la caja de string: ", cajaDeString.obtenerContenido());

let cajaDeNumberos = new Caja<number>(123);
console.log("Contenido de la caja de numeros: ", cajaDeNumberos.obtenerContenido());


interface interVehiculo {
  marca: string;
  modelo: string;
  fechaFabricacion: Date;
  kilometraje: number;  
}

let cajaDeInterfaz = new Caja<interVehiculo>({
  marca: "Toyota",
  modelo: "Corolla",
  fechaFabricacion: new Date("2020-01-01"),
  kilometraje: 10000
});

console.log("Contenido de la caja de interfaz: ", cajaDeInterfaz.obtenerContenido());




