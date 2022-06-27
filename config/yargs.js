const argv=require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'

                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: false,
                    describe: 'Hasta que número quieres multiplicar'
                })               
                .check((argv, options)=>{
                    //console.log('yargs',argv);
                    if(isNaN(argv.b)){
                        throw'La base tiene que ser un número'
                    }
                    return true;
                }) 
                .check((argv, options)=>{
                    //console.log('yargs',argv);
                    if(isNaN(argv.h)){
                        throw'El límite tiene que ser un número'
                    }
                    return true;
                })                               
                .argv; 


module.exports=argv;