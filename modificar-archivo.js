const fs = require('fs');
const path = require ('path');

fs.appendFile(
  path.join(__dirname, 'files', 'ejemplo.txt' ),
  '\nEsto es una nueva inea',
  {ecoding: 'utf-8'},
  (err) =>{
    if (err) throw err;
    console.log('Archivo Actualizado');
  }
);