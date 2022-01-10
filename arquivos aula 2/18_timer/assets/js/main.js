(function(){
    const time = document.querySelector('.container .timer');
    const iniciar = document.querySelector('.container .iniciar');
    const pausar = document.querySelector('.container .pausar');
    const zerar = document.querySelector('.container .zerar');

    let sec = 0;
    let rodando;
    let jaRodando = false;
    let rodo1x;

    function CriaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000)
        let temp = data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
        time.innerHTML = temp
    }

    function iniciado(){
        if(jaRodando === false){
            rodando = setInterval(function(){
                sec++
                CriaHoraDosSegundos(sec)
            }, 1000)
    
            time.style.color="black"

            jaRodando = true
            rodo1x = true
        }
    }

    document.addEventListener('click', function(e){
       const el = e.target;

       if(el.classList.contains('iniciar')) {
            iniciado();
        }

       if(el.classList.contains('pausar')) {
            if(jaRodando === false && rodo1x){
                iniciado();
                pausar.innerHTML = 'pausar'
            } else {
                clearInterval(rodando);
                time.style.color="red"
                jaRodando = false
                pausar.innerHTML = 'despausar'
            }
        }

        if(el.classList.contains('zerar')) {
            sec = 0;
            clearInterval(rodando);

            time.innerHTML = '00:00:00'

            time.style.color="black"

            jaRodando = false
        }
    });

})();