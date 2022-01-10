type ObeterChaveFn = <O, K extends keyof O>(obejeto: O, chave: K) => O[K];

const obterChave: ObeterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['vacina 1', 'vacina 2'],
};

const vacinas = obterChave(animal, 'vacinas');
console.log(vacinas);
