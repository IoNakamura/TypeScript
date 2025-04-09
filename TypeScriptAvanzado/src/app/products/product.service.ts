import { Product } from './product.model';

export const products: Product[] = [];

/*export const addProduct = (data: Product) => {
  products.push(data);
}*/


export const addProduct = (data: Product) => {
  //data.id = '1'; // Esto no se puede hacer porque id es readonly
  //data.createdAt = new Date(1997, 2, 4);
  data.updatedAt = new Date(1997, 2, 4); // Esto si se puede hacer porque updatedAt no es readonly
  products.push(data);
  // Aqui hay un problema y es que es posible modificar el id, createdAt y updatedAt
  // Entonces para esto vamos a usar la variable readonly
}













/* IGNORAR, CODIGO GENERADO POR AI */
/*
export const addProduct = (data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
  const newProduct = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
  products.push(newProduct);
}

export const updateProduct = (id: string, changes: Partial<Product>) => {
  const index = products.findIndex(item => item.id === id);
  if (index === -1) return;
  products[index] = {
    ...products[index],
    ...changes
  }
}

export const deleteProduct = (id: string) => {
  const index = products.findIndex(item => item.id === id);
  if (index === -1) return;
  products.splice(index, 1);
}

export const getProduct = (id: string) => {
  return products.find(item => item.id === id);
} */