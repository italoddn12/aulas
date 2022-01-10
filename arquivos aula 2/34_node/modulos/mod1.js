class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;


// modos de exporta
/*
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falanome = falanome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falanome = falanome;

module.exports = {

}

temos 2 variaveis padroes
__dirname mostra o caminho da pasta
__filename mostra o caminho do arquivo
*/