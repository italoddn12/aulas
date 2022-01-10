//                  0        1       2       3      4        5
const nomes = ['eduardo','maria','joana','italo','igor','izabele'];

//copiar um array para alterar o novo sem alterar o antigo

const nomes2 = [...nomes];

//add elemento no fianal do array
nomes2.push('joao');

//add no começo do array
nomes2.unshift('wallace')

// retira o elemento do final 
const retornaRemovidoFinal = nomes2.pop();

// retira o elemento do começo 
const retornaRemovidoComeco = nomes.shift();

// recorta um array passar valores negativos no parametro faz com q começe do final
// copia os indices
const nomes10 = ['italo', 'igor','izabele'];
const novo = nomes10.slice(0,-1);

//converter string em um array entre parametros coloca o separador
const nome3 = 'luiz otavio mirando';
const nomes3 = nome3.split(' ');

//colocar strings em um arrayentre parametros coloca o separador
const nome = nomes. join(' ');

//faz td 
//                 -6       -5      -4      -3     -2       -1                     
//                  0        1       2       3      4        5
const novoArr = ['eduardo','maria','joana','italo','igor','izabele'];

// nomes.splice(indice, delete, elementos para add)
//  retorna um array por que pode deletar mais intens
// primeiro paramentro e de onde começa 
// segundo quantos vao ser removidos
//pode remover um elemento e add outro no lugar ex: splice(3,1,'luiz') 
const removidos = novoArr.splice(4,1)

// concatenar arrays a1.concat(a2)
const a1 = [1,2,3];
const a2 = [4,5,6];

const a3 = [...a1, 'luiz', ...a2, ...[7,8,9]];

// O método shift() remove o primeiro elemento de uma matriz e 
//retorna o elemento removido. Este método altera o comprimento da matriz.
console.log(string.shift());

//cria e retorna uma nova string, concatenando todos os elementos em um array
// usando virgula para separar ou um caractere passado por parametro
//Se o array tiver apenas um item, esse item será devolvido sem usar o separador.
console.log(string.join());

