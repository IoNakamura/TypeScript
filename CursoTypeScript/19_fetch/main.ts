//Async/await en Typescript
// Asyncrona es una funcion que se puede ejecutar por fuera o en paralelo fuera del hilo principal
// Await es una funcion que se puede esperar

//fetch es un metodo para obtener informacion dentro de node
//await indica que la aplicacion va a correr en paralelo
// data va a esperar a que la respuesta llegue en formato json

const fetchData = async () => {
  const API_URL = 'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json'
  const response = await fetch(API_URL) 
  const data = await response.json()
  console.log(data)
  return data;
}

let buttonInfo: HTMLButtonElement = document.querySelector('.btnInfo') as HTMLButtonElement;
let paragraphInfo: HTMLParagraphElement = document.querySelector('.info') as HTMLParagraphElement;

// El evento click se ejecuta cuando el usuario hace click en el boton
// Cuando haga clic va a obtener la informacion de la funcion fetchData
// paragraphInfo va a mostrar la informacion de la funcion fetchData
buttonInfo.addEventListener('click', async () => {
  const data = await fetchData();
  paragraphInfo.textContent = JSON.stringify(data);
});


// Para ejecutar esta vaina es necesario hacer el comando:
// tsc -p tsconfig.json // Como parametro para compilar tsconfig.json
// y luego abrir el archivo index.html en el navegador
// para que funcione el fetch es necesario agregar la libreria:
// tsc 