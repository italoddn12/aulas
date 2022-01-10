(function(){
 // this e quem chama o metodo
    function criaCalculadora() {
        return {
            display: document.querySelector('.display'),


            inicia() {
              this.cliqueBotoes();
              this.pressionaEnter();
            },

            pressionaEnter() {
                document.addEventListener('keyup', e => {
                    if(e.keyCode === 13){
                        this.realizaConta();
                    }
                });
            },

            realizaConta() {
                let conta = this.display.value;
                try {
                    conta = eval(conta);

                    if(!conta) {
                        alert('conta inválida');
                        return;
                    }

                    this.display.value = String(conta);
                } catch (e) {
                    alert('conta inválida');
                    return;
                }
            },

            clearDisplay() {
                this.display.value = '';
            },

            apagaUm() {
                this.display.value = this.display.value.slice(0, -1);
            },

            cliqueBotoes() {
                // this -> calculadora
                document.addEventListener('click', (e) => {
                    //this agr e o document 
                    const el = e.target;

                    if(el.classList.contains('btn-num')) {
                        this.btnParaDisplay(el.innerText);
                    }

                    if(el.classList.contains('btn-clear')) {
                        this.clearDisplay();
                    }

                    if(el.classList.contains('btn-del')) {
                        this.apagaUm();
                    }

                    if(el.classList.contains('btn-eq')) {
                        this.realizaConta();
                    }
                }); // .bind(this) esta falando para função usar o meu this
            },

            btnParaDisplay(valor) {
                this.display.value += valor;
            }


        };
    }

    const calculadora = criaCalculadora();
    calculadora.inicia();   


})();


