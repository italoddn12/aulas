import { type } from 'os';

// tipo record 1 tipo da chave 2 tipo do valor
const obejeto1: Record<string, string | number> = {
  nome: 'Italo',
  sobrenome: 'Macedo',
  idade: 22,
};
console.log(obejeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required trasforma opcinais em obrigatorio
type PessoaRequired = Required<PessoaProtocol>;

// Partial trasforma obrigatorio em opcinais
type PessoaPartial = Partial<PessoaRequired>;

// Readonly trasforma em somente leitura
type PessoaReadonly = Readonly<PessoaPartial>;

// Pick ecolha as chaves do objeto PessoaReadonly
type PessoaPick = Pick<PessoaReadonly, 'nome' | 'sobrenome'>;

const obejeto2: PessoaReadonly = {
  nome: 'Italo',
  sobrenome: 'Macedo',
  idade: 22,
};
console.log(obejeto2);

// extract esta em abc e nn esta em cde
// exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asdasdsadasdasda8541sa85da',
  nome: 'italo',
  idade: 22,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accontData } = accountMongo;
  return { ...accontData, id: _id };
}

const accoutApi = mapAccount(accountMongo);
console.log(accoutApi);

// Module mode
export default 1;
