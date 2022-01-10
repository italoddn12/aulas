function inverteNomeECor(param1: string, param2: string) {
  // Closure
  return function <T extends new (...args: any[]) => any>(target: T) {
    console.log('sou o decorador e recebi', target);
    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + param1 + ' ' + ' ' + param2;
      }
    };
  };
}

function outroDecorador<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    //
  };
}

@outroDecorador
@inverteNomeECor('valor1', 'Valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('sou a classe');
  }
}

const animal = new Animal('italo', 'Roxo');
console.log(animal);
