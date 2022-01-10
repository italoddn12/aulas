// arguments que sustenta todos argumentos enviados

function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
//funcao(1, 2, 3, 4, 5, 6, 7);

// desestruturação

function italo([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

//italo(['luiz otávio','miranda',30]);

// para pegar o resto dos argumento basta usar os 3 pontos
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        acumulador += numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);