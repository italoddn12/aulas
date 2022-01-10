type TipoNome = {
  nome: string;
};

type TipoSobreome = {
  sobrenome: string;
  nomecompleto(): string;
};

type TipoNomeCompleto = {
  nomecompleto(): string;
};

export class Pessoa implements TipoNome, TipoSobreome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}

  nomecompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Italo', 'macedo');
console.log(pessoa.nomecompleto());
