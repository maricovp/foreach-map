/* Crie um algoritmo usando o método map() para converter um 
array de strings para um array de números?  */
let arrayDeStrings = ['1', '2', '3', '4', '5'];

let arrayDeNumeros = arrayDeStrings.map(str => parseInt(str));

console.log(arrayDeNumeros); 
