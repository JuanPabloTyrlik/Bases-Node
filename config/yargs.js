const options = {
    base: {
        alias: 'b',
        demand: true
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar en consola', options)
    .command('crear', 'Guarda la tabla de multiplicar en un archivo', options)
    .help()
    .argv;

module.exports = {
    argv
};