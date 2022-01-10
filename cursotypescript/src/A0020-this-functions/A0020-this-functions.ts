export function funcao(this: Date, argument1: string): void {
  console.log(this);
  console.log(argument1);
}
funcao.call(new Date(), 'italo');
funcao.apply(new Date(), ['italo']);
