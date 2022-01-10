//usa barra invertida pra escapar um caractere do codigo
let string = "um texto bonito pkrl";


// mi mostra o elemento na posição selecionada
console.log(string.charAt(6));

//concatena uma variavel com um texto
console.log(`${string} em um lindo dia`) 

//mostra a posição da palavra procurada pode passar outro valor de onde 
//começa buscar retorna -1 c nn achar
console.log(string.indexOf('texto', 2)) 

//substitui uma palavra pela outra
console.log(string.replace('texto', 'italo'));
// expresao regular para tirar td que não e um numero
console.log(string.replace(/\D+/g, ''));

//corta as palavras passando parametros de corte
//valores negativos coloca o length - o numero selecionado
console.log(string.slice(3,9));

//cria um array passando por parametro o separador segundo valor passa a 
//qtd de array
console.log(string.split(' '));

//deixa td em maisucula e minuscula
console.log(string.toUpperCase());
console.log(string.toLowerCase());
