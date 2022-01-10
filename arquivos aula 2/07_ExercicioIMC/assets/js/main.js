(function(){
    const $peso = document.querySelector('#peso');
    const $altura = document.querySelector('#altura');
    const $button = document.querySelector('#btn');
    const $form = document.querySelector('#formulario');
    const $result = document.querySelector('.result');

    let eNumero;

    $form.addEventListener('submit',function(e){
        e.preventDefault;

        debugger

        let pesoFloat = parseFloat($peso.value);
        let alturaFloat = parseFloat($altura.value);

        check(pesoFloat, alturaFloat);

        if(eNumero === 'certo'){
            calcularImc(pesoFloat, alturaFloat);
        } else{
            $result.innerHTML = `<p>${eNumero}</p>`;
            $result.style.background='#FF4040';
        }
        
    });

    function calcularImc(peso, altura){
        let imc = peso / (altura * altura);
        let resultadoFinal = tabelaImc(imc);
        escreve(imc, resultadoFinal);
    }

    function tabelaImc(imc){
        let tabelaResultado;
        if(imc <= 18.5) {
            tabelaResultado = 'Abaixo do peso';  
        } else if (imc >=18.5 && imc <=24.9) {
            tabelaResultado = 'Peso normal';
        } else if (imc >=25 && imc <= 29.9){
            tabelaResultado = 'Sobrepeso'; 
        } else if (imc >=30 && imc <= 34.9){
            tabelaResultado = 'Obesidade grau 1'; 
        } else if (imc >=35 && imc <= 39.9){
            tabelaResultado = 'Obesidade grau 2'; 
        } else{
            tabelaResultado = 'Obesidade grau 3';
        }

        return tabelaResultado;
    }

    function check(p,a){
        if(isNaN(p) === false && isNaN(a) === false){
            eNumero = 'certo';
        } else if(isNaN(p) === true && isNaN(a) === true){
            eNumero = 'Digite somente numeros';
        } else if(isNaN(p) === true){
            eNumero = 'Digite um Peso valido';
        } else if(isNaN(a) === true){
            eNumero = 'Digite uma Altura valida';
        }
    }
    
    function escreve(imc, resultadoFinal){
        $result.innerHTML = `<p>IMC: ${imc.toFixed(2)}, ${resultadoFinal}</p>`;
        $result.style.background='#00FF7F'
    }
})();