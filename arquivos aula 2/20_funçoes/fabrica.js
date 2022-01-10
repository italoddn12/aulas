// factory function (função fabrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // quando so obtem um valor nn setta nenhuma variavel
        //pode sem um getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto) {
            return `${this.nome} esta ${assunto}.`;
        },
        altura,
        peso,
        //getter so obter o valor da função 
        get imc() {
            const indice =  this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('luiz', 'otavio', 1.80, 80);
p1.nomeCompleto = 'Maria oliveira silva';
console.log(p1.nomeCompleto);

// construction function (função construtora)