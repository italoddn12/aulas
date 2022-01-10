const fs = require('fs');
const path = require('path');

const caminho = path.resolve(__dirname, 'pessoas.json');
const escreve = require('./modules/escreve');
const le = require('./modules/le');

const pessoas = [
    {nome:'italo'},
    {nome:'izabele'},
    {nome:'igor'},
];

const json = JSON.stringify(pessoas, '', 2);

escreve(caminho, json);

async function leArquivo() {
    const dados = await le(caminho);
    renderiza(dados);
}

function renderiza(dados) {
    dados = JSON.parse(dados);

    for(let valor of dados){
        console.log(valor.nome)
    }
}
leArquivo();