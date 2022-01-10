
function mostraHora () {

    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaoDoIntervalo() {
    console.log(mostraHora());
}

const timer = setInterval(function (){
    console.log(mostraHora())
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('ola mundo!')
}, 5000);