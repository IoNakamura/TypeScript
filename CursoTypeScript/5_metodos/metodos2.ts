// Parametros opcionales, valores por defecto y sobrecarga de funciones

function saludar(nombre: string, saludo?: string): string {
  if (saludo) {
    return `${saludo}, ${nombre}! :D `;
  } else {
    return `Hola, ${nombre} ¬¬"`;
  }
}

console.log(saludar("Christian"));
console.log(saludar("Christian", "Buenos dias"));

console.log("============= Parametros multiples ==================");

// Parametros multiples

function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((acumulados, numero) => acumulados + numero, 0);
}

console.log("Suma de todos los numeros: ", sumarTodos(1, 2, 3, 4, 5));

// Valores por defecto
console.log("============= Valores por defecto ==================");

function despedir(nombre: string, despedida: string = "Adios"): string {
  return `${despedida}, ${nombre}! :D`;
}

console.log(despedir("Christian"));
console.log(despedir("Christian", "Hasta luego"));










