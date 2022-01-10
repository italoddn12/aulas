interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  readonly idade?: number;
}

export const pessoa: Pessoa = {
  nome: 'italo',
  sobrenome: 'macedo',
  enderecos: ['Av. Brasil'],
  idade: 21,
};

console.log(pessoa);
