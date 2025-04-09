// Modificadores de acceso (public, private, proyected) en typescript

export class classPersona {
  public nombre: string; // Public es accesible desde cualquier parte
  protected edad: number; // Protected es accesible desde la clase y las clases que heredan de ella
  private esDesarrollador: boolean; // Private es accesible solo desde la clase

  constructor(nombre: string, edad: number, esDesarrollador: boolean) {
    this.nombre = nombre;
    this.edad = edad;
    this.esDesarrollador = esDesarrollador;
  }
  
  public saludar() {
    this.esDev(); //Se puede llamar un metodo privado desde un metodo publico ya que es el mismo objeto
    return "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.";
  }

  protected obtenerEdad(): number {
    return this.edad;
  }

  private esDev(): boolean{
    return this.esDesarrollador;
  }
}

//let persona2 = new classPersona("Christian", 39, true);
//persona2.saludar();


