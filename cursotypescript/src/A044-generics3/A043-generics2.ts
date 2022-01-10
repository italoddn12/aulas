interface PessoaProtocolo<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'italo',
  sobrenome: 'macedo',
  idade: 21,
};

console.log(aluno1);
