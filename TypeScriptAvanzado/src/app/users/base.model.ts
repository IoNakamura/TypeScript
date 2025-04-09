// Aqui voy a usar el termino de herencia para crear unos datos que van a ser usados en otros archivos
// NOTA : Solo las interfaces se pueden extender, los types no
// NOTA 2 : Las interfaces no se pueden usar para crear tipos de datos, solo para definir tipos de datos
// NOTA 3 : Las interfaces se pueden implementar en otras interfaces, pero los types no
// NOTA 4 : Ya puedes maniplar las variables que estan dentro de la interfaz
export interface BaseModel {
  readonly id: string | number; // readonly es una variable que no se puede modificar
  readonly createdAt: Date;
  updatedAt: Date;
}


