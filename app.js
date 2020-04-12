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
    .command('crear', 'Guarda la tabla de multiplicar en un archivo', {
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
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// Commands

switch (argv._[0]) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo ${archivo} ha sido creado.`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}