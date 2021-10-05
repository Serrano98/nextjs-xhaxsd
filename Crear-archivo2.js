const fs = require('fs');
const path = require('path');
//Crear un archivo nuevo
fs.writeFile(
  path.join(__dirname, '/FILES/','ejemplo.txt'),
   'Este es otrocontenido',
   { encoding: 'utf-8'}, 
   (err) => {
  if (err) throw err;
  console.log('the file has been saved!');
}
);