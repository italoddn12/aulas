/*fetch('pagina1.html')
.then(resposta => {
    if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
    return resposta.text();
})
.then(html => console.log(html))
.catch(e => console.log(e));*/


document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href'); // esta pegando o link 

        // devo usar a funcao tetch(link) passando um link como paramentro e guarda a resposta em uma varialvel
        // essa função vai mi retorna um objeto;
        const response = await fetch(href); 
    
        // confiro o status 200 pra ver c achou a pagina
        if(response.status !== 200) throw new Error('ERRO 404!');
    
        // transformo em html usando a função .text() que ira trasforma o objeto em innerHtml
        // e guardo em uma variavel depois e so colocar dentro de uma div;
        const html = await response.text()
        carregaResultado(html)
    
    } catch (e) {
        console.error('ERROR 404!')
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');

    resultado.innerHTML = response;
}

