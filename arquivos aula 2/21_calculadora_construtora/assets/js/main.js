(function(){

    function Calculadora(){
        this.display = document.querySelector('.display');

        this.inicia = () =>{
            this.capturaClicks();
            this.capturaTecla();
        } 
            
        this.capturaClicks = () => {
            document.addEventListener('click', e => {
                el = e.target;

                // c na lista de clas do btn q esta sendo criado contem
                if(el.classList.contains('btn-num')) this.addNumDisplay(el);
                if(el.classList.contains('btn-clear')) this.clear();
                if(el.classList.contains('btn-del')) this.del();
                if(el.classList.contains('btn-eq')) this.realizaConta();
            });
        }

        this.capturaTecla = () =>{
            document.addEventListener('keypress', e =>{
                el = e.keyCode;

                if(el === 13){
                    this.realizaConta(); 
                }
            })
        }

        this.addNumDisplay= (texto) =>{
            this.display.value += el.innerText
            this.display.focus();
        };

        this.clear = () => this.display.value = '';

        this.del = () => this.display.value = this.display.value.slice(0,-1);

        this.realizaConta = () =>{
            try{
                let conta = eval(this.display.value)

                if(!conta){
                    alert('conta invalida')
                    return
                }
                this.display.value = conta

            } catch(e){
               alert('conta invalida');
               return 
            }
        }
    }



    const calculadora = new Calculadora();
    calculadora.inicia();

})();