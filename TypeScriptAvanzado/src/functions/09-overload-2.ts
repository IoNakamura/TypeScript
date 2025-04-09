/**
 * Sobrecarga de funciones en TypeScript
 *
 * Este archivo demuestra cómo implementar correctamente la sobrecarga de funciones en TypeScript.
 * La sobrecarga de funciones permite definir múltiples firmas de función con diferentes tipos
 * de parámetros y valores de retorno, pero con el mismo nombre.
 */

// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string

/**
 * Declaraciones de sobrecarga de la función parseStr
 * Estas declaraciones definen las diferentes firmas de la función
 * que TypeScript utilizará para la verificación de tipos.
 */
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;


// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else {
//     return input.split(''); // string[]
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string'){
    return input.split(''); // string[]
  } else if (typeof input === 'number'){
    return true; // boolean
  }
}

//Se puede usar el .reverse gracias a la sobrecarga de funciones
const rtaArray = parseStr('Nico');
rtaArray.reverse();
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }
console.log('rtaArray', 'Nico =>' ,rtaArray);

//Se puede usar el .reverse gracias a la sobrecarga de funciones
const rtaStr = parseStr(['N','i','c','o']);
rtaStr.toLowerCase();
// if (typeof rtaStr === 'string') {
//   rtaStr.toLowerCase();
// }
console.log('rtaStr', "['N','i','c','o'] =>",rtaStr);

/**
 * Ejemplo de uso: Convertir un número en un booleano
 *
 * Con la sobrecarga de funciones, TypeScript puede inferir correctamente
 * que rtaBoolean es un booleano.
 */
const rtaBoolean = parseStr(12);
