const dadosCliente: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string?] = [1, 'Luiz'];
const dadosCliente3: [number, string, ...string[]] = [1, 'Luiz'];

/*
dadosCliente[0] = 100;
dadosCliente[1] = 'italo';
*/

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);

// readonly
const array1: readonly string[] = ['italo', 'macedo'];
const array2: ReadonlyArray<string> = ['italo', 'macedo'];

console.log(array1);
console.log(array2);
