const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra la tabla en consola'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                describe: 'Hasta donde quiere la multiplicacion'
            })
            .check( ( argv, options ) => {
                if (isNaN( argv.base )){
                    throw 'La base tiene que ser un numero'
                } else if(argv.hasta<1){
                    throw 'El valor de hasta debe ser mayor a uno'
                }
                return true;
            })
            .argv;

module.exports = argv;