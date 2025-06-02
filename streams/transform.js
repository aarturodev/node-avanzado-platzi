import fs from 'node:fs';
import { Transform, pipeline } from 'node:stream';


const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    // Convertir el chunk a mayúsculas
    const upperChunk = chunk.toString().toUpperCase();
    // Llamar al callback con el chunk transformado
    callback(null, upperChunk);
  }
});

pipeline(
  fs.createReadStream('./entrada.txt', 'utf-8'),
  transformStream,
  fs.createWriteStream('./salida.txt', 'utf-8'),
  (err) => {
    if (err) {
      console.error('Pipeline falló:', err);
    } else {
      console.log('Pipeline completado exitosamente');
    }
  }
)