(function(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    
    form.addEventListener('submit', recebeEventoForm);

    function recebeEventoForm(e){
        e.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push(construtor(nome.value,sobrenome.value,peso.value,altura.value));

        escreve(nome.value,sobrenome.value,peso.value,altura.value);
        
    }

    function construtor(nome,sobrenome,peso,altura){
        return {
            nome,
            sobrenome,
            peso,
            altura
        }
    }

    function escreve(nome,sobrenome,peso,altura){
        resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}</p><br>`;
    }

})();