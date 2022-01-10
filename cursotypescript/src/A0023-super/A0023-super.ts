export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: number,
  ) {
    super(nome, sobrenome, idade, cpf);
  }
  getNomeCompleto(): string {
    console.log('fazendo algo antes');
    const result = super.getNomeCompleto();
    return result + ' HEYYYYY!!';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'isso vem do cliente ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('italo', 'macedo', 21, '000.000.000-00');
const aluno = new Aluno('italo', 'macedo', 21, '000.000.000-00', 10);
const cliente = new Cliente('italo', 'macedo', 21, '000.000.000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
