/*=========================================================
* Objetivo: Aplicar estruturas de repetição (while and for);
* Data: 04/08/22
* Autor: Gyovanne Martins
* Versão: 1.0.0

*/

console.log('Calculadora tabuada');

//import do arquivo de função para realizar calculos
const {calcular} = require('./Modulos/calculadora.js');
var readLine = require('readline');

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

