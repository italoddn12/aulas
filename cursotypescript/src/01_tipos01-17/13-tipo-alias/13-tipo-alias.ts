type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  preferredColor?: string;
};

type ColorRGB = 'Red' | 'Green' | 'Blue';
type ColorCMYK = 'cyan' | 'Magenta' | 'Yellow' | 'Black';
type PreferredColor = ColorRGB | ColorCMYK;

const person: Person = {
  age: 30,
  name: 'italo',
  salary: 200_000,
};

export function setPreferredColor(
  person: Person,
  color: PreferredColor,
): Person {
  return { ...person, preferredColor: color };
}

console.log(setPreferredColor(person, 'Blue'));
