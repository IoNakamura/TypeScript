import { Category } from './../categories/category.model';
import { BaseModel } from './../users/base.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL'; // El type no se puede extender

/*
export interface Product {
  id: string | number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  stock: number;
  size?: Sizes;
  category: Category;
}
*/

// Aqui vamos a usar la herencia entonces vamos a extender la interfaz BaseModel
export interface Product extends BaseModel {
  title: string;
  stock: number;
  size?: Sizes;
  category: Category;
}
