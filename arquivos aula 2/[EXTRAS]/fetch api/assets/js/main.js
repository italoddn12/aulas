
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objeto = await axios(href);

    colocaNaPagina(objeto.data);
}

function colocaNaPagina(html) {
    const div = document.querySelector('.resultado');

    div.innerHTML = html;
}