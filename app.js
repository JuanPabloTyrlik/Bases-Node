// Imports

const { crearArchivo } = require('./multiplicar/multiplicar');

let base = '7';

crearArchivo(base)
    .then(archivo => console.log(`El archivo ${archivo} ha sido creado.`))
    .catch(err => console.log(err));