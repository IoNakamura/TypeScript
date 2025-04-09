import { BaseModel } from "../users/base.model";

/*export interface Category {
  id: string | number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
}*/

// Aqui vamos a usar la herencia entonces vamos a extender la interfaz BaseModel
export interface Category extends BaseModel {
  name: string;
}

