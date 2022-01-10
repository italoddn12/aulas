const { alfabeto } = require('./base');

// [abc] -> Conjunto [^] -> Negação
// [0-9] \d \D
// [a-z] \w \W
// \s \S espaços

console.log(alfabeto);
console.log(alfabeto.match(/[abc]/g));
console.log(alfabeto.match(/[\u00A0-\u00BA]/g));