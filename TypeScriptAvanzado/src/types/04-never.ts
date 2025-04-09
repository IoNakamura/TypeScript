// Funciones que nunca terminan

const sinFin = () => {
  while (true) {
    console.log("Hola");
  }
};

//sinFin();

// Funciones que lanzan errores
const lanzarError = (mensaje: string): never => {
  throw new Error(mensaje);
};

// La función NO se ejecuta hasta que la llames
function validarEdad(edad: number) {
    if (edad < 0) {
        lanzarError("La edad no puede ser negativa"); // Aquí se ejecuta
    }
    // Si la edad es válida, continúa aquí
    console.log("Edad válida:", edad);
}

// Solo cuando llamas a validarEdad con un número negativo
// se ejecutará lanzarError
//validarEdad(-5); // Lanzará error
//validarEdad(25); // No lanzará error
// Es como un "botón de emergencia" que solo se activa cuando lo necesitas,
//  no está constantemente ejecutándose.


//verificar un array de tipo array
const example = (input: unknown) => {
  if (typeof input == "string") {
    return "es un string";
  } else if (Array.isArray(input)) {
    return "es un array";
  }
  return lanzarError("ERROR!!: no es un string ni un array");
};

console.log(example("Hola"));
console.log(example([1, 2, 3]));
console.log(example(12341)); // Detiene la ejecución por que lanza un error
console.log(example("Hola despues del lanzarError"));
