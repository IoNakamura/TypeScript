import { BaseModel } from './../users/base.model';


export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

/*export interface User {
  id: string | number;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  role: ROLES;
}*/

// Aqui vamos a usar la herencia entonces vamos a extender la interfaz BaseModel
export interface User extends BaseModel {
  username: string;
  role: ROLES;
}
