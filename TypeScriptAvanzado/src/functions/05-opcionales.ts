// Parametros opcionaes y nullish.coalescing

// Nota: Los parametros opcionales deben ir al final de la lista de parametros

// se creara varias constantes para explicar cada concepto
export const createProduct1 = (
  id: number | string, // | es para indicar que puede ser de tipo number o string
  isNew: boolean,
  stock?: number // Los parametros opcionales ( ? ) deben ir al final de la lista de parametros
) => {
  return {
    id,
    stock,
    isNew
  }
}

createProduct1("A12", true, 12);
createProduct1(11, true, 12);
createProduct1(11, true);

const cont1_1 = createProduct1(11, true, 12);
console.log(cont1_1);
// Resultado: { id: 11, stock: 12, isNew: true }

// Si ejecutamos esto con el comando: npx ts-node .\opcionales.ts
// Permite ejecutar pero stock no esta definido ya que es opcional
const const1_2 = createProduct1(11, true);
console.log(const1_2);
// Resultado: { id: 11, stock: undefined, isNew: true }

//const const1_3 = createProduct1(11); // Error: Faltan parametro
// Resultado: Error: Faltan parametros

console.log("--------------------------------");
export const createProduct2 = (
  id: number | string, // | es para indicar que puede ser de tipo number o string
  isNew?: boolean,
  stock?: number // Los parametros opcionales ( ? ) deben ir al final de la lista de parametros
) => {
  return {
    id,
    isNew: isNew || true, // Si isNew no esta definido, se le asigna true
    stock: stock || 10 // Si stock no esta definido, se le asigna 10
  }
}

/*
  Nota: Si se omite el parametro stock, se le asigna 10 por defecto
  Nota: Si se omite el parametro isNew, se le asigna true por defecto

  Pero en javascript tiene problemas con esto.
  0 === false
  '' === false
  false === false
  null === false
  undefined === false
  NaN === false

  Si se envia cualquiera de estos valores, se tomara como false y no como 0, '', null, undefined o NaN
  Si le envio un false se tomara como true y si le envio un 0 se tomara como 10

  Por lo que se debe usar el operador nullish coalescing ( ?? )
  */

const const2_1 = createProduct2(3, true, 12);
console.log(const2_1);
// Resultado: { id: 3, isNew: true, stock: 12 }

const const2_2 = createProduct2(3);
console.log(const2_2);
  // Resultado { id: 3, isNew: true, stock: 10 }

const const2_3 = createProduct2(3, false, 0); // Si se envia un false, se tomara como true
console.log(const2_3);
// Resultado { id: 3, isNew: true, stock: 0 }

// Con ?? se soluciona el problema de javascript

console.log("--------------------------------");
export const createProduct3 = (
  id: number | string, // | es para indicar que puede ser de tipo number o string
  isNew?: boolean,
  stock?: number // Los parametros opcionales ( ? ) deben ir al final de la lista de parametros
) => {
  return {
    id,
    isNew: isNew ?? true, // Si isNew no esta definido, se le asigna true
    stock: stock ?? 10 // Si stock no esta definido, se le asigna 10
  }
}

const const3_1 = createProduct3(3, true, 12);
console.log(const3_1);
// Resultado: { id: 3, isNew: true, stock: 12 }

const const3_2 = createProduct3(3);
console.log(const3_2);
// Resultado: { id: 3, isNew: true, stock: 10 }

const const3_3 = createProduct3(3, false, 0); // Si se envia un false, se tomara como true
console.log(const3_3);
// Resultado: { id: 3, isNew: false, stock: 0 }






