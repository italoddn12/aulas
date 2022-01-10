const pessoa = {
    nome: 'italo',
    sobrenome: 'macedo',
    idade: 21,
    falarNome(){
        console.log(this.nome + ' '+ this.sobrenome);
    },
    dataDeNacimento(){
        const data = new Date();
        return data.getFullYear() - this.idade;
    }
};

/*for (let chave in pessoa) {
    console.log(pessoa[chave])
}*/

// Factory function / Constructor functions / Classes

const construtora = function(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade,
        get falarNome(){ //a palavra get vai tranformar a função em elemento
            console.log(`${this.nome} ${this.sobrenome}`);
        },
        get dataDeNacimento(){
            const data = new Date();
            return data.getFullYear() - this.idade;
        }
    }
}

const pessoa1 = construtora('izabele', 'ketlen', 15);

pessoa1.falarNome;
Object.freeze(pessoa1);

// para travar um objeto basta colocar Object.freeze(pessoa1)
// a vantagem de ter uma função dentro de um ojeto e que facilita o acesso
// a os dados dentro do obj ex: pessoa.falaNome vai mi falar o nome completo
//delete pessoa.nome;
// console.log(pessoa[chave]); colocando a chave dinamicamente