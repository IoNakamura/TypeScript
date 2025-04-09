//Parametros por defecto

export const createProduct = (
  id: number | string,
  isNew: boolean = true, // Si no se envia el parametro, se toma el valor por defecto
  stock: number = 10 // Si no se envia el parametro, se toma el valor por defecto
) => {
  return {
    id,
    isNew,
    stock
  }
}

const const6_1 = createProduct(1, true, 12);
console.log(const6_1);

const const6_2 = createProduct(1);
console.log(const6_2);

const const6_3 = createProduct(1, false, 0);
console.log(const6_3);

const const6_4 = createProduct(1, true, 100);
console.log(const6_4);

const const6_5 = createProduct(5, false);
console.log(const6_5);