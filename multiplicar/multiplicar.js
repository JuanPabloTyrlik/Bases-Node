// imports
const fileSystem = require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base \'${base}\' no es un número.`);
            return;
        }
        let data = '';

        for (let j = 1; j <= 10; j++) {
            if (j === 1) data += `Tabla del ${base}\n`;
            data += `\t${base} * ${j} = ${base*j}\n`;
            if (j === 10) data += `\n`;
        }

        fileSystem.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`);
        });
    });
};

module.exports = {
    crearArchivo
};