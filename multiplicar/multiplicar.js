//requires
const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');


const listarTabla = (base, limite = 10) => {

    console.log('==================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('==================='.green);


    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${ base*i }`)
    }

}


const crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introduccido ${base} no es un número`);
            return;
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {

            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-del-${base}-limite-${limite}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt `);
            console.log(`el archivo tabla-del-${base}-limite-${limite}.txt ha sido creado`);
        })

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}