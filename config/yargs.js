const parametros = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', parametros)
    .command('crear', 'crea en un archivo de texto la tabla de multiplicar', parametros)
    .help()
    .argv;


module.exports = {
    argv
}