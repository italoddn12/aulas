type HasName = { name: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };
type Person = HasName & HasLastName & HasAge;

// itersection
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type intersection = AB & AC & AD;

const person: Person = {
  age: 30,
  name: 'italo',
  lastName: 'Macedo',
};

console.log(person);
