/* try {
    // É executada quando não há erros
} catch (e) {
    // É executada quando há erros
} finally {
    // sempre e executada
} */



// c data nn for uma instancia do objeto Date vai da false
function retornaHora(data) {
    if (data && !(data instanceof Date)){ 
        throw new TypeError('esperando instacia de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false  
    });
}


try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    // tratar error
} finally {
    console.log('tenha um bom dia');
}
