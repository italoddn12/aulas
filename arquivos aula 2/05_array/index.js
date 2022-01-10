
const alunos = ['luiz','maria','joão'];

//adiciona um elemento no final
alunos.push('italo');

//adiciona no começo
alunos.unshift('ze ruela');

//remove o ultimo elemento
const removido = alunos.pop();

//remove do começo 
const removidoC = alunos.shift();

//deleta o conteudo do elemento
delete alunos[1];

// cria um array com elementos separados
Array.from(variavel)