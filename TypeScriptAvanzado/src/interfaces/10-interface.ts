/**
 * Este archivo demuestra el uso de interfaces en TypeScript
 * Las interfaces son una forma de definir la estructura de un objeto
 */

// Definición de tipos personalizados usando type
type Sizes = 'S' | 'M' | 'L' | 'XL';  // Union type que solo permite estos valores específicos
type userId = string | number;         // Union type que permite string o number

/**
 * Interface Product
 * Define la estructura que debe tener un producto
 * - id: identificador único (puede ser string o number)
 * - title: título del producto
 * - createdAt: fecha de creación
 * - stock: cantidad disponible
 * - size?: tamaño del producto (opcional, indicado por el ?)
 */
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;  // El ? indica que esta propiedad es opcional
}

// Array que almacenará productos que cumplan con la interface Product
const products: Product[] = [];

// Ejemplo de cómo agregar un producto al array
products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90
});

/**
 * Función que agrega un producto al array
 * @param data - Objeto que debe cumplir con la interface Product
 */
const addProduct = (data: Product) => {
  products.push(data);
}
