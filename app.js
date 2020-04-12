// Imports
const { argv } = require('./config/yargs');
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