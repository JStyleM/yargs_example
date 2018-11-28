const fs = require('fs')
const colors = require('colors/safe');

let listarTabla = (base, limite = 10) => {

    let respuesta = '';

    for (let i = 1; i <= limite; i++) {
        respuesta += `${base} * ${i} = ${base * i}\n`;
    }

    console.log(respuesta);

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let file = `tabla-${base}-${limite}.txt`
        let data = '';

        if (!Number(base) || !Number(limite)) {
            reject(`La base o limite no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${i * base}\n`
        }

        fs.writeFile(`tablas/${file}`, data, err => {

            if (err) {
                reject(err);
            } else {
                resolve(colors.green(`El archivo ${colors.blue(file)} ha sido creado!`));
            }
        })


    })
}

module.exports = {
    crearArchivo,
    listarTabla
}