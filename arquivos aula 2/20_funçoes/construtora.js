
function Pessoa(nome, sobrenome) {

    //privados
    const id = 123456;
    const metodoInterno = function() {

    };

    //publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um metodo');
    };
}

const p1 = new Pessoa('Luiz', 'otavio');
const p2 = new Pessoa('maria', 'oliveira');

p2.metodo();