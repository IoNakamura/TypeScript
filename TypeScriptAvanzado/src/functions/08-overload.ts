// Sobrecarga de funciones: el problema de la sobrecarga de funciones

// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string

/**
 * Convierte una cadena de texto en un array de caracteres o un array de caracteres en una cadena de texto.
 *
 * @param input - Puede ser una cadena de texto o un array de caracteres
 * @returns Si el input es una cadena, devuelve un array de caracteres. Si el input es un array, devuelve una cadena.
 *
 * @example
 * // Convierte una cadena en un array de caracteres
 * parseStr('Nico') // ['N', 'i', 'c', 'o']
 *
 * @example
 * // Convierte un array de caracteres en una cadena
 * parseStr(['N', 'i', 'c', 'o']) // 'Nico'
 */
function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

/**
 * Ejemplo de uso: Convertir una cadena en un array de caracteres
 *
 * Nota: Se utiliza una comprobación de tipo para asegurar que rtaArray es un array
 * antes de llamar al método reverse(), ya que TypeScript no puede inferir automáticamente
 * el tipo de retorno específico en este caso.
 */
const rtaArray = parseStr('Nico');
// rtaArray.reverse(); // Error: TypeScript no puede inferir que rtaArray es un array
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Nico =>' ,rtaArray);

/**
 * Ejemplo de uso: Convertir un array de caracteres en una cadena
 *
 * Nota: Se utiliza una comprobación de tipo para asegurar que rtaStr es una cadena
 * antes de llamar al método toLowerCase(), ya que TypeScript no puede inferir automáticamente
 * el tipo de retorno específico en este caso.
 */
const rtaStr = parseStr(['N','i','c','o']);
// rtaStr.toLowerCase(); // Error: TypeScript no puede inferir que rtaStr es una cadena
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['N','i','c','o'] =>",rtaStr);
