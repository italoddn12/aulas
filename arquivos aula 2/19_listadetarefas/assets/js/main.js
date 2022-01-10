(function(){

    const iputTarefa = document.querySelector('.input-tarefa');
    const btnTarefa = document.querySelector('.btn-tarefa');
    const tarefas = document.querySelector('.tarefas');

    function criaLi() {
        const li = document.createElement('li');
        return li;
    }

    function limpaInput(){
        iputTarefa.value = '';
        iputTarefa.focus();
    }

    function criaBotaoApagar(li) {
        li.innerText += ' ';
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'Apagar'
        botaoApagar.setAttribute('class','apagar')
        li.appendChild(botaoApagar);
    }

    iputTarefa.addEventListener('keypress', function(e){
        if (e.keyCode === 13){
            if (!iputTarefa.value) return;
            criaTarefa(iputTarefa.value);
            limpaInput()
        }
    });

    function criaTarefa(textoInput) {
       const li = criaLi();
       li.innerText = textoInput
       tarefas.appendChild(li);
       criaBotaoApagar(li);
       salvarTarefas();
    }

    btnTarefa.addEventListener('click', function(){
        if (!iputTarefa.value) return;
        criaTarefa(iputTarefa.value);
        limpaInput()
    });

    document.addEventListener('click', function(e){
        const el = e.target;
        if (el.classList.contains('apagar')) {
            el.parentElement.remove();
            salvarTarefas();
        }
    });

    function salvarTarefas() {
        const liTarefas = tarefas.querySelectorAll('li');
        const listaDeTarefas = [];

        for (let tarefa of liTarefas){
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //trim remove o espaço extra
            listaDeTarefas.push(tarefaTexto)
        }

        // coverte para string
        const tarefasJSON = JSON.stringify(listaDeTarefas);
        
        // primeiro e o nome usado para recuperar
        // so pode salvar strings
        localStorage.setItem('tarefas', tarefasJSON);
    }

    function adicionaTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas')
        const listaDeTarefas = JSON.parse(tarefas) // coverte de volta para oq era
        
        for (let tarefa of listaDeTarefas) {
            criaTarefa(tarefa)
        }
    }
    adicionaTarefasSalvas()
})();