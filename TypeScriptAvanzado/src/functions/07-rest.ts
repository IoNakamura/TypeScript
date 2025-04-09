// Parametros rest

// En esta url podras encontrar un ejemplo aplicando los ...params
// https://github.com/platzi/curso-nodejs-auth/blob/13-step/middlewares/auth.handler.js
// https://www.typescriptlang.org/docs/handbook/functions.html#rest-parameters

/**
 * Este archivo demuestra el uso de parámetros rest en TypeScript
 * y diferentes enfoques para verificar roles de usuario.
 */
import { User, ROLES } from "../types/01-enum";

/**
 * Usuario actual del sistema
 * @type {User}
 */
const currentUser: User = {
    username: "Juan",
    role: ROLES.CUSTOMER
}

/**
 * Verifica si el usuario actual tiene el rol de administrador
 * @returns {boolean} - true si el usuario es administrador, false en caso contrario
 */
export const checkAdminRole = () => {
    if (currentUser.role === ROLES.ADMIN) {
        return true;
    }
    return false;
}

const rta = checkAdminRole();
console.log("checkAdminRole", rta);


/**
 * Verifica si el usuario actual tiene uno de los dos roles especificados
 * @param {string} role1 - Primer rol a verificar
 * @param {string} role2 - Segundo rol a verificar
 * @returns {boolean} - true si el usuario tiene alguno de los roles, false en caso contrario
 */
export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
      return true;
  }
  if (currentUser.role === role2) {
      return true;
  }
  return false;
}

const rta2 = checkRole(ROLES.ADMIN, "seller");
console.log("checkRole", rta2);

/**
 * Verifica si el usuario actual tiene alguno de los roles especificados en el array
 * @param {string[]} roles - Array de roles a verificar
 * @returns {boolean} - true si el usuario tiene alguno de los roles, false en caso contrario
 */
export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkRoleV2', rta3);

/**
 * Verifica si el usuario actual tiene alguno de los roles especificados
 * utilizando parámetros rest (...roles)
 * @param {...string} roles - Lista variable de roles a verificar
 * @returns {boolean} - true si el usuario tiene alguno de los roles, false en caso contrario
 */
export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkRoleV3', rta4);
