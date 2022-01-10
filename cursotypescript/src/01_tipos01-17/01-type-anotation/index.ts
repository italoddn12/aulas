/*eslint-disable*/
// tipos básicos (aqui occire inteferência de tipos)

let nome: string = 'italo'; // Qualquer tipo de strings: '' "" ``
let idade: number = 21; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeString: Array<string> = ['a', 'b', 'c'];
let arrayDeString2: string[] = ['a', 'b', 'c'];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'italo'
};

// Funções
function soma(x: number, y: number): number {
  return x+y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
