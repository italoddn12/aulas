function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('ERRO'))

        setTimeout(() => {
            resolve(msg);
        },tempo)
    });
}

esperaAi('frase 1', rand(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi(222, rand(1,3))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 3', rand(1,3))
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log('Erro', e);
    })
