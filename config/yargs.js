const yargs = require('yargs');

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = yargs
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crear un archivo cvon la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}