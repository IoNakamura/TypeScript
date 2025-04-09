// Se separa el archivo de implementacion para que no se mezclen las clases con las implementaciones
// Asi mantenemos las clase agnosticas de implementacion
import { classPersona } from "./clase";

let persona2 = new classPersona("Christian", 39, true);
persona2.saludar();
// persona2. Ya despues del punto puedes llamar todos los metodos y variables que esten publicos
// persona2.obtenerEdad(); // Esto no se puede hacer porque es protected
// persona2.esDev(); // Esto no se puede hacer porque es private



