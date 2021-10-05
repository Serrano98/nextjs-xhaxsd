const fs = require('fs')

//Crear un archivo nuevo
fs.writeFile(
  'ejemplo.txt', 'Este es el contenido',{ encoding :'utf-8'}, (err) => {
if (err) throw err;
console.log('the file has been saved!');
});