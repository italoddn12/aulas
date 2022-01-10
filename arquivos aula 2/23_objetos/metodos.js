const produto = {nome: caneca, preco: 1.8};

// copiar objetos 2 modos
const caneca1 = {...produto};
// ou
const caneca2 = Object.assign({}, produto, {material: porcelana});

// não deixa alterar o objeto
Object.freeze(produto);

// mostra as chaves do objeto
Object.keys(produto);

// configura um objeto ou varios
Object.defineProperty(produto, 'nome', {})
Object.defineProperties

// mostra as configurações de uma chave de um objeto
Object.getOwnPropertyDescriptor(produto, 'nome');

// mostra os valores do objeto
Object.values(produto);

// mostra os valores e as chaves em um array
Object.entries(produto);

// destroctor mostra a chave e o valor fora do array
for(let valor of Object.entries(produto)){
    console.log(valor[0], valor[1])
}

// primeiro parmetro de quem quer setar, segundo quem vai ser o prototype
Object.setPrototypeOf(p2, Produto.prototype);