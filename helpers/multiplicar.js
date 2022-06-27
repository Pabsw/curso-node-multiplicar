const fs=require('fs');

let resultado;
let salida='';

const colors = require('colors');

/*const crearArchivo=(multiplicacion = 5)=>{
    
    console.log('----------------------------------------------');
    console.log(`Tabla de multiplicar del ${multiplicacion}`);
    console.log('----------------------------------------------');

    let resultado;
    let salida='';

    for(let valor=0; valor<11;valor++){

        resultado=multiplicacion*valor;
        //console.log(`${multiplicacion}*${valor}=${resultado}`);
        salida += `${multiplicacion}*${valor}=${resultado}\n`
    }

    console.log(salida);

   // fs.writeFile(`tabla-${multiplicacion}.txt`,salida,(err)=>{
   //     if(err) throw err;
   //     console.log(`Archivo tabla del ${multiplicacion} creado`);
   // })

    fs.writeFileSync(`tabla-${multiplicacion}.txt`,salida);
    console.log(`Archivo tabla del ${multiplicacion} creado`);
}*/





/*const crearArchivo=(multiplicacion, callback)=>{

    console.log('----------------------------------------------');
    console.log(`Tabla de multiplicar del ${multiplicacion}`);
    console.log('----------------------------------------------');

    return new Promise((resolve, reject)=>{

        for(let valor=0; valor<11;valor++){

            resultado=multiplicacion*valor;
            salida += `${multiplicacion}*${valor}=${resultado}\n`
        }

        (salida)
            ?resolve(salida)
            :reject(`Ha ocurrido un eror`);

            fs.writeFileSync(`tabla-${multiplicacion}.txt`,salida);
    })




}*/

const crearArchivo=async(base,listar,hasta)=>{

    try{

        for(let valor=0; valor<=hasta;valor++){

            resultado=base*valor;
            salida += `${base}*${valor}=${resultado}\n`
        }

            if(listar){
                console.log('----------------------------------------------'.yellow);
                console.log('Tabla de multiplicar del '.underline.green+`${base}`.red);
                console.log('----------------------------------------------'.yellow);
                console.log(salida)
            }
       /* (salida)
            ?resolve(salida)
            :reject(`Ha ocurrido un eror`);*/
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

            return `tabla-${base}.txt`.rainbow;


    }catch(error){
        throw error;
    }
}

module.exports={
    crearArchivo
}
   


