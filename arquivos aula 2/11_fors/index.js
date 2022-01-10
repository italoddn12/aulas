
// for classico - Geralmente com iteraveis (array ou strings)
// for in - Retorna o indice ou chave (string, array ou objetos)
// for of - retorna o valor em si (interaveis,arrays ou strings)



const nome = ['luiz','otavio','henrrique'];
/*

//forma literal q retorna o indice
for (let i = 0; i < nome.length; i++){ 
    console.log(nome[i]);
}

//outra forma q retorna o indice funciona melhor com objeto
for (let i in nome){
    console.log(nome[i]);
}


//retorna o valor da indice 

for (let valor of nome){
    console.log(valor);
}

*/

nome.forEach(function(valor,indice,array) {
    console.log(valor,indice,array);
})