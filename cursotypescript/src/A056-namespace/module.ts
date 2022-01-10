/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNameSpace {
  export const nomeDoNamespace = 'italo';
  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace('italo');
  console.log(pessoaDoNamespace);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'nome do outro namespace';
  }
}

const pessoaDoNamespace = new MeuNameSpace.PessoaDoNamespace('italo');
console.log(pessoaDoNamespace);
console.log(MeuNameSpace.nomeDoNamespace);
console.log(MeuNameSpace.OutroNamespace.nomeDoNamespace);
