(function(){

    class ValidaFormulario {
        constructor() {
            this.formulario = document.querySelector('.formulario');
            this.eventos();
        }

        eventos() {
            this.formulario.addEventListener('submit', e =>{
                this.handle(e);
            })
        }

        handle(e) {
            e.preventDefault();

            const camposValidos = this.camposValidos();
            const senhasValidas = this.senhasValidas();

            if(camposValidos && senhasValidas) {
                alert('formulario enviado')
                this.formulario.submit();
            }
        }

        senhasValidas() {
            let valid = true;

            const senha = this.formulario.querySelector('.senha');
            const repetirSenha = this.formulario.querySelector('.repetir-senha');

            if(senha.value.length < 6 || senha.value.length > 12) {
                valid = false;
                this.criaError(senha, 'senha precisa ter entre 6 e 12 caracteres');
                this.criaError(repetirSenha, 'senha precisa ter entre 6 e 12 caracteres');
            }

            if(senha.value !== repetirSenha.value) {
                valid = false;
                this.criaError(repetirSenha, 'As senhas precisam ser iguais');
            }

            return valid;
        }

        camposValidos() {
            let valid =  true;
            for(let error of this.formulario.querySelectorAll('.error-text')){
                error.remove();
            }

            for(let campo of this.formulario.querySelectorAll('.validar')) {
                const label = campo.previousElementSibling.innerText;
                if(!campo.value) {
                    valid =  false;
                    this.criaError(campo, `Campo "${label}" está vazio`);
                }

                if(campo.classList.contains('cpf')) {
                    if(!this.validaCpf(campo)) valid = false;
                }

                if(campo.classList.contains('usuario')) {
                    if(!this.validaUsuario(campo)) valid = false;
                }
            }

            return valid;
        }

        validaUsuario(campo) {
            let valid = true;
            const usuario = campo.value;

            if(usuario.length < 3 || usuario.length > 12) {
                valid = false;
                this.criaError(campo, 'Usuário deverá ter entre 3 e 12 caracteres');
            }

            if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
                valid = false;
                this.criaError(campo, 'Usuario só poderá conter letras e/ou números');
            }

            return valid;
        }

        validaCpf(campo) {
            const cpf = new ValidarCpf(campo.value);

            if(!cpf.valida()) {
                this.criaError(campo, 'CPF invalido')
                return false;
            }

            return true;
        }

        criaError(campo, msg) {
            const div = document.createElement('div');
            div.innerHTML = msg;
            div.classList.add('error-text');

            campo.insertAdjacentElement('afterend', div);
        }
    }

    const valida = new ValidaFormulario();
})()