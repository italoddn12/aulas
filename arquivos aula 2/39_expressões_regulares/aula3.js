const { texto, arquivos } = require('./base')

// quantificadores
// * (opcionais) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1 {0,1}
// ^ começa com 
// $ termina com
// ?= positive lookahed mi retorne a frase si existir isso na frase
// ?<= positive lookahed behind

// console.log(texto);
// const regExp1 = /Jo+ão+/gi
// console.log(texto.match(regExp1));
// \ Caractere de escape

const regExp2 = /\.jpe{0,}g/gi

for (const arquivo of arquivos) {
    const valido = arquivo.match(regExp2);

    // if(!valido) continue;
    console.log(arquivo, valido);
}