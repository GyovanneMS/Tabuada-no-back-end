/*=========================================================
* Objetivo: Criação de funções para calcular a tabuada;
* Data: 04/08/22
* Autor: Gyovanne Martins
* Versão: 1.3.0
=========================================================*/



const calcularTabuada = function (valor1){
    let tabuada = valor1;
    let resultado;
    let cont = 0;

    while(cont <= 100){
        resultado = (tabuada * cont).toFixed(2);
        console.log(tabuada + ' X ' + cont + ' = ' + resultado);
        cont++;
    }

console.log('==========')

    for(cont = 0;cont <= 100 ; cont++){
        resultado = (tabuada * cont).toFixed(2);
        console.log(tabuada + ' X ' + cont + ' = ' + resultado);
    }

}

module.export = {
    calcularTabuada
}