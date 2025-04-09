export enum ROLES { // Se ingresa el export para que se pueda usar en otros archivos
    ADMIN = "admin",
    SELLER = "seller",
    CUSTOMER = "customer"
}

export type User = { // en 07-rest.ts se importa el type User
    username: string;
    role: ROLES;
}

const currentUser: User = {
    username: "Juan",
    role: ROLES.ADMIN
}



