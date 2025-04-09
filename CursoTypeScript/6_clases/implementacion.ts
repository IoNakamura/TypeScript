// Se separa el archivo de implementacion para que no se mezclen las clases con las implementaciones
// Asi mantenemos las clase agnosticas de implementacion
import { classPersona } from "./clase";

let persona2 = new classPersona("Christian", 39, true);
persona2.saludar();