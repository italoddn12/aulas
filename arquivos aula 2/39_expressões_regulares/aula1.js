// g - global (encontra todas as ocorrências)
// i - insensitive
// () grupos
// | ou

const { texto } = require('./base')

const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/i;
const fund = regExp1.exec(texto)

if(fund) {
    console.log(fund[0]);
    console.log(fund[1]);
    console.log(fund[2]);
}