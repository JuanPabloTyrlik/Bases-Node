// imports
const fileSystem = require('fs');

let construirTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base \'${base}\' no es un número.`);
            return;
        }
        let data = '';

        for (let j = 1; j <= limite; j++) {
            if (j === 1) data += `Tabla del ${base}\n`;
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
                    resolve(`tabla-${base}.txt`);
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