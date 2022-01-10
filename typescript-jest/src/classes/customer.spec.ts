import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have properties firstaname, lastname, cpf', () => {
    const sut = createIndividualCustomer('italo', 'macedo', '111.111');

    expect(sut).toHaveProperty('firstName', 'italo');
    expect(sut).toHaveProperty('lastName', 'macedo');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('italo', 'macedo', '111.111');

    expect(sut.getName()).toBe('italo macedo');
    expect(sut.getIDN()).toBe('111.111');
  });
});

const createEnterpriseCustumer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('EnterPriseCustumer', () => {
  it('should have properties name, cnpj', () => {
    const sut = createEnterpriseCustumer('ifood', '123');
    expect(sut).toHaveProperty('name', 'ifood');
    expect(sut).toHaveProperty('cnpj', '123');
  });

  it('should have methods to get name and idn', () => {
    const sut = createEnterpriseCustumer('ifood', '123');

    expect(sut.getName()).toBe('ifood');
    expect(sut.getIDN()).toBe('123');
  });
});
