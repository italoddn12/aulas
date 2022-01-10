
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} esta falando`);
    }
}

const p1 = new Pessoa('luiz', 'miranda');
console.log(p1);

// função construtora

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} esta falando`);
};

const p2 = new Pessoa2('italo', 'macedo');

console.log(p2);