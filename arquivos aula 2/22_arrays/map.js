const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// mapea os valores antigos para os novos valores
const numerosEmDobro = numeros.map(valor => {
    return valor * 2;
});
//console.log(numerosEmDobro);

const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'leticia', idade: 19},
    {nome: 'rosana', idade: 32},
    {nome: 'wallace', idade: 47}
];

const nomes = pessoas.map(obj =>{
    return obj.nome
})
//console.log(nomes)

const idades = pessoas.map(obj =>{

    return {idade: obj.idade}
})

//console.log(idades)

const aid = pessoas.map((obj, indice) =>{
    const newObj = {...obj};
    newObj.id = indice + 1;
    return newObj;
})
console.log(aid)