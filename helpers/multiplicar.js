const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async( base =5, listar =false,hasta =10 ) => {
    try {
        let salida = await getMultiplicar(base,listar, hasta);

        fs.writeFileSync( `./salida/tabla-${base}.txt`,salida);
        
        if (listar) {
            console.log(colors.red(salida));
        }
        

        //console.log(`tabla-${base}.txt creado!`);
        return `tabla-${base}.txt creado!`;
    } catch (error) {
        throw error;
    }
    
}

const getMultiplicar = (base, listar, hasta) => {

        if (listar) {
            console.log('===================');
            console.log( 'Tabla del',base);
            console.log('===================');
        }
        

        let salida = '';
        let num = 1;
        while (num <=hasta){
            salida +=`${base} x ${num} = ${base*num}\n`;
            num += 1;
        }

        return promesa =new Promise( (resolve, reject) => {

            ( salida ) ? 
                resolve(salida)
            :   reject(` no se pudo crear el archivo`);
            
    
        });
    
}

module.exports= {
    crearArchivo
}