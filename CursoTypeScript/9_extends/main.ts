// Restricciones con extends, genericos en interfaces
let cadenaTexto: string = "Christian Camilo Contar";

console.log(cadenaTexto.length);

function obtenerLongitud<T extends { length : number}>(objeto: T): number {
  let longitud: number = objeto.length;
  let tipo: string = typeof objeto;
  console.log(`Tipo de dato: ${tipo}, y la Longitud es: ${longitud}`);
  return objeto.length;
}

console.log(obtenerLongitud("Cadena"));
console.log(obtenerLongitud([1, 2, 3, 4, 5]));
console.log(obtenerLongitud({length: 10}));
// console.log(obtenerLongitud(10)); //Esto genera un error ya que typescript no permite que pase numero en lenght


