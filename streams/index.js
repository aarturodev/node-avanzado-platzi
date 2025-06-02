import fs from 'node:fs';
// la manera más sencilla de leer un archivo es con fs.readFileSync
// para archivos pequeños, pero para archivos grandes es mejor usar streams
// const data = fs.readFileSync('./entrada.txt', 'utf-8');

const data = fs.createReadStream('./entrada.txt', 'utf-8')
// Escucha el evento 'data' para procesar los datos a medida que se leen
data.on('data', (chunk) => {
  console.log(chunk.toString());
})
// Escucha el evento 'end' para saber cuándo ha terminado de leer el archivo
data.on('end', ()=>{
  console.log('Fin del archivo');
})
