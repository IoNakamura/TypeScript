/*
  El mapped type de PersonaSoloLectura es:
  PersonaSoloLectura =
  {
    readonly nombre: string;
    readonly edad: number;
  }
*/
var personaSoloLectura = {
    nombre: "Jaime",
    edad: 20
};
console.log(personaSoloLectura);
var btnPequeno = "btn-Pequeño";
var btnMediano = "btn-Mediano";
var btnGrande = "btn-Grande";
console.log(btnPequeno, btnMediano, btnGrande);
//Esta funcion es de tipo T, y esta funcion va a recibir un argumento de tipo T
//y va a retornar un tipo EsNumero<T>
function esNumero(valor) {
    return (typeof valor === 'number');
}
var result1 = esNumero(123);
var result2 = esNumero("Hola");
console.log(result1, result2);
// Intersection types
