/*=========================================================
* Objetivo: Aplicar estruturas de repetição (while and for);
* Data: 04/08/22
* Autor: Gyovanne Martins
* Versão: 1.3.0

*/

console.log('Calculadora tabuada');

//import do arquivo de função para realizar calculos

const { calcularTabuada } = require('./modulos/tabuada.js')
var readLine = require('readline');

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


entradaDados.question('Digite a tabuada a ser calculada: ', function(valor1){
    let tabuada = valor1;
    calcularTabuada(tabuada);
    
})