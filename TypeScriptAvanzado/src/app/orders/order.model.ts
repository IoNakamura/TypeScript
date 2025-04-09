import { Product } from './../products/product.model';
import { User } from './../users/user.model';
import { BaseModel } from './../users/base.model';

/*
export interface Order {
  id: string | number;
  createdAt: Date;
  updatedAt: Date;
  products: Product[];
  user: User;
}
*/

// Aqui vamos a usar la herencia entonces vamos a extender la interfaz BaseModel
export interface Order extends BaseModel {
  products: Product[];
  user: User;
}