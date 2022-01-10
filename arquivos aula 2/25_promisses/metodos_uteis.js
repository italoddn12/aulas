function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject(new Error('cai no error'))
            } 
    
            resolve(msg + ' - passei na promise');
        },tempo)
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject

/*const promises = [
    esperaAi('Promisse 1', rand(1, 5)),
    esperaAi('Promisse 2', rand(1, 5)),
    esperaAi('Promisse 3', rand(1, 5)),
    esperaAi(1000, rand(1, 5))
];*/

// promisse all resolve todas as promessas primeiro em ordem dps mi entrega
// tudo de uma so vez

/*Promise.all(promises)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });*/

// promise race vai mi entregar 1 so promessa que vai ser a primeira
// a ser executada

/*Promise.race(promises)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });*/

function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Pagina em cache')
    } else {
        return esperaAi('baixei a pagina', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e));