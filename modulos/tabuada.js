/*=========================================================
* Objetivo: Criação de funções para calcular a tabuada;
* Data: 04/08/22
* Autor: Gyovanne Martins
* Versão: 1.0.0
=========================================================*/

const calcularTabuada = function (valor1){
    let tabuada = valor1;
    let resultado;
    const cont = 0;

    while(cont <= 100){
        resultado = tabuada * cont;
        console.log(tabuada + ' X ' + cont + ' = ' + resultado);
        cont++;
    }

}