function Produto(nome, preco, estoque) {
    // primeiro parametro pergunta em qual obj eu quero mexer
    // this = todo objeto
    // segundo parametro e a propiedade
    
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // enumerable vai deixar ver a propiedade
        value: estoque, // valor 
        writable: true, // nn deixa alterar o valor 
        configurable: false // nn pode reconfigurar nn deixa apagar
    });

    // primeiro parametro pergunta em qual obj eu quero mexer
    // segundo parametro e um objeto que contem uma chave e essa chave
    // recebe um objeto com as configuraçoes da chave
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // enumerable vai deixar ver a propiedade
            value: nome, // valor 
            writable: false, // nn deixa alterar o valor 
            configurable: false // nn pode reconfigurar nn deixa apagar
        },
        preco: {
            enumerable: true, // enumerable vai deixar ver a propiedade
            value: preco, // valor 
            writable: true, // nn deixa alterar o valor 
            configurable: false // nn pode reconfigurar nn deixa apagar
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)