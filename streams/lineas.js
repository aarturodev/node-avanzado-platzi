import fs from 'node:fs';
import { pipeline, Transform } from 'node:stream';
import {createInterface}from 'node:readline/promises';


const transformStream  = new Transform({
  transform(chunk, encoding, callback) {
    const uperCaseChunk = chunk.toString().toUpperCase();
    callback(null, uperCaseChunk);
  }
})

async function leerLineas(){
  const archivo = fs.createReadStream('contenido.txt', 'utf-8');
  const rl = createInterface({
    input: archivo,
    crlfDelay: Infinity
  })

  rl.on('line', (line) => {
    transformStream.write(line + '\n');
  });

  rl.on('close', () => {
    transformStream.end();

  });

  pipeline(
    transformStream,
    fs.createWriteStream('contenido-transformado.txt'),
    (err) => {
      if (err) {
        console.error('Error en la tubería:', err);
      } else {
        console.log('Transformación completa');
      }
    }
  )
}

leerLineas()
  .then(() => console.log('Lectura completa'))
  .catch(err => console.error('Error al leer el archivo:', err));