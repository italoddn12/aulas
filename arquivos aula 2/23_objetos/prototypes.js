
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

const p2 = {
    nome: 'caneca',
    preco: 15
}

// primeiro parmetro de quem quer setar, segundo quem vai ser o prototype
Object.setPrototypeOf(p2, Produto.prototype);


const p3 = Object.create()