import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer('Ivan', 'Reis', '000.000.000-00');
    expect(sut).toHaveProperty('firstName', 'Ivan');
    expect(sut).toHaveProperty('lastName', 'Reis');
    expect(sut).toHaveProperty('cpf', '000.000.000-00');
  });

  it('should have methods to get and idn', () => {
    const sut = createIndividualCustomer('Ivan', 'Reis', '000.000.000-00');
    expect(sut.getName()).toBe('Ivan Reis');
    expect(sut.getIDN()).toBe('000.000.000-00');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name e cnpj', () => {
    const sut = createEnterpriseCustomer('Ivan Cia Ltda', '000.000.000-00');
    expect(sut).toHaveProperty('name', 'Ivan Cia Ltda');
    expect(sut).toHaveProperty('cnpj', '000.000.000-00');
  });

  it('should have methods to get and idn', () => {
    const sut = createEnterpriseCustomer('Ivan Cia Ltda', '000.000.000-00');
    expect(sut.getName()).toBe('Ivan Cia Ltda');
    expect(sut.getIDN()).toBe('000.000.000-00');
  });
});
