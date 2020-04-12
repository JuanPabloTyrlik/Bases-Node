// Required
const fileSystem = require('fs');

let data = '';

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        if (j === 1) data += `### Tabla del ${i}
    `;
        data += `${i} * ${j} = ${i*j}
    `;
        if (j === 10) data += `\n`;
    }
}

fileSystem.writeFile('tablas.md', data, (err) => {
    if (err) throw err;
    console.log('El archivo tablas.md fue creado');
});