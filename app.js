// Imports
const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar en consola', {
        base: {
            alias: 'b',
            demand: true
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
const { crearArchivo } = require('./multiplicar/multiplicar');

// let base = process.argv[2].split('=')[1];

console.log(argv.base);
console.log(argv.limite);


// crearArchivo(argv.base)
//     .then(archivo => console.log(`El archivo ${archivo} ha sido creado.`))
//     .catch(err => console.log(err));