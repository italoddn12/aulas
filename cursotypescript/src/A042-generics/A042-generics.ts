type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function meuFilter<T>(array: T[], calbackfn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (calbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

const arrayFiltrado = meuFilter(array, (value) => value < 5);
console.log(arrayFiltradoOriginal);