interface TipoNome {
  nome: string;
}

interface TipoSobreome {
  sobrenome: string;
  nomecompleto(): string;
}

interface TipoNomeCompleto {
  nomecompleto(): string;
}

type TipoPessoa = TipoNome & TipoSobreome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobreome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomecompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Italo', 'macedo');
console.log(pessoa.nomecompleto());
