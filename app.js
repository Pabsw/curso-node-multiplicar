const fs=require('fs');
//const { argv } = require('process');
//const { options } = require('yargs');
const {crearArchivo}=require('./helpers/multiplicar');
const argv=require('./config/yargs');



console.clear();

//console.log('base: yargs',argv.base);
/*console.log(process.argv);
const[ , , arg3='base=5'] = process.argv;
const[ , base=5]=arg3.split('=');
console.log(base);*/


//const base = 3;

crearArchivo(argv.b,argv.l,argv.h)
   .then(crearArchivo=>console.log(crearArchivo, `creado`))
   .catch(err=>console.log(err));