//                0   1  2   3  4  5  6  7  8  9 10 11  12  13
const numeros  = [5, 50, 80, 1, 2, 3, 4, 5, 6, 20, 8, 15, 11 ,27 ]

const numerosFiltrados = numeros.filter(valor => valor > 10);

//console.log(numerosFiltrados)


const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'leticia', idade: 19},
    {nome: 'rosana', idade: 32},
    {nome: 'wallace', idade: 47}
];

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length > 5);
const pessoasMaisVelhas = pessoas.filter(valor => valor.idade > 50);
const pessoaTerminaComA = pessoas.filter(valor =>{
    let terminaComA = valor.nome.indexOf('a',valor.nome.length -1);
    if(terminaComA !== -1){
        return true
    }
})
console.log(pessoaTerminaComA)