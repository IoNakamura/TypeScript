"use strict";
//Async/await en Typescript
// Asyncrona es una funcion que se puede ejecutar por fuera o en paralelo fuera del hilo principal
// Await es una funcion que se puede esperar
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//fetch es un metodo para obtener informacion dentro de node
//await indica que la aplicacion va a correr en paralelo
// data va a esperar a que la respuesta llegue en formato json
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const API_URL = 'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json';
    const response = yield fetch(API_URL);
    const data = yield response.json();
    console.log(data);
    return data;
});
let buttonInfo = document.querySelector('.btnInfo');
let paragraphInfo = document.querySelector('.info');
// El evento click se ejecuta cuando el usuario hace click en el boton
// Cuando haga clic va a obtener la informacion de la funcion fetchData
// paragraphInfo va a mostrar la informacion de la funcion fetchData
buttonInfo.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetchData();
    paragraphInfo.textContent = JSON.stringify(data);
}));
// Para ejecutar esta vaina es necesario hacer el comando:
// tsc -p tsconfig.json // Como parametro para compilar tsconfig.json
// y luego abrir el archivo index.html en el navegador
// para que funcione el fetch es necesario agregar la libreria:
// tsc 
