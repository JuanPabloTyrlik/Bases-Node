// imports
const fileSystem = require('fs');
const colors = require('colors');

let construirTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base \'${base}\' no es un número.`.red);
            return;
        }
        let data = '';

        for (let j = 1; j <= limite; j++) {
            if (j === 1) {
                data += `===========================\n`.green;
                data += `\tTabla del ${base}\n`.green;
                data += `===========================\n`.green;
            }
            data += `\t${base} * ${j} = ${base*j}\n`;
        }
        resolve(data);
    });
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        construirTabla(base, limite)
            .then(data => {
                fileSystem.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
                    if (err) reject(err);
                    resolve(`tabla-${base}.txt`.green);
                });
            })
            .catch(e => console.log(e));
    });
};

let listarTabla = (base, limite) => {
    construirTabla(base, limite)
        .then(data => console.log(data))
        .catch(e => console.log(e));
};

module.exports = {
    crearArchivo,
    listarTabla
};