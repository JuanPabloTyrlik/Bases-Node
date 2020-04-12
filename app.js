// Imports

const { crearArchivo } = require('./multiplicar/multiplicar');

let base = process.argv[2].split('=')[1];

crearArchivo(base)
    .then(archivo => console.log(`El archivo ${archivo} ha sido creado.`))
    .catch(err => console.log(err));