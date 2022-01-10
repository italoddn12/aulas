const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escreve');
const ler = require('./modules/ler');


const pessoas = [
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'Eduardo'},
    {nome: 'Luiza'},
];
const json = JSON.stringify(pessoas,'', 2);
escreve(caminhoArquivo, json)

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    console.log(dados);
    renderizaDados(dados);
}

const dadosArquivo = lerArquivo(caminhoArquivo)

function renderizaDados(dados) {
    dados = JSON.parse(dados);

    dados.forEach(val => console.log(val));
}
