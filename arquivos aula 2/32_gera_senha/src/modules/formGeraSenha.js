import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const numeros = document.querySelector('.chk-numeros');
const maiusculas = document.querySelector('.chk-maiusculas');
const minusculas = document.querySelector('.chk-minusculas');
const simbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', e => {
        senhaGerada.innerHTML = gera();
    })
};

function gera() {
    const senha = geraSenha(qtdCaracteres.value, numeros.checked, maiusculas.checked, minusculas.checked, simbolos.checked);

    return senha || 'Nada selecionado';
}