// reduzir um array a um unico elemento
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// a cada return da funcao o acumulador recebe um valor
const total = numeros.reduce((acumulador, valor, indice, array) =>{
    acumulador += valor
    return acumulador;
}, 0); //valor inicial do acumulador]

//console.log(total);

//retorne um array com os pares
const pares = numeros.reduce((acumulador, valor, indice, array) =>{
    if(valor % 2 === 0) acumulador.push(valor)
    return acumulador;
}, []); //valor inicial do acumulador

//console.log(pares)

//retorne um array com o dorbro dos valores
const dobro = numeros.reduce((acumulador, valor, indice, array) =>{
    acumulador.push(valor*2);

    return acumulador
}, []); 

//console.log(dobro);


// retorne a pessoa mais velha

const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 105},
    {nome: 'leticia', idade: 19},
    {nome: 'rosana', idade: 32},
    {nome: 'wallace', idade: 47}
];

const maisVelha = pessoas.reduce((acumulador,valor) =>{
   if(acumulador.idade > valor.idade) return acumulador
   return valor
})
console.log(maisVelha)
