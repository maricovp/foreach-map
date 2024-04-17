/* Crie um array com 5 números e usando o método forEach(), crie 
um algoritmo para  adicionar 1 a cada elemento deste array?*/
let numerosarray = [1, 2, 3, 4, 5];
let numerossomados = numerosarray.map(function(elemento) {
    return elemento + 1
});

console.log(numerossomados);