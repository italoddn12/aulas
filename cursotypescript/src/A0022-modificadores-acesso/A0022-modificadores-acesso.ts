export class Empresa {
  public readonly nome: string; // public não necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const Colaborador1 = new Colaborador('Italo', 'macedo');
const Colaborador2 = new Colaborador('Maria', 'miranda');
const Colaborador3 = new Colaborador('Joao', 'viera');
empresa1.adicionaColaborador(Colaborador1);
empresa1.adicionaColaborador(Colaborador2);
empresa1.adicionaColaborador(Colaborador3);
empresa1.mostrarColaboradores();
