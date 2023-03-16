import { CustomerDomainEntity } from './customer.domain-entity';

describe('CustomerDomainEntity', () => {

  const data = {
    fullName: "Cristian Tironi",
    document: 12345678,
    paymentMethod: "Credito"
  }

  it('test customer', () => {

    const customerEntity = new CustomerDomainEntity(data);

    expect(customerEntity.fullName).toEqual('Cristian Tironi');
    expect(customerEntity.document).toEqual(12345678);
    expect(customerEntity.paymentMethod).toEqual("Credito")
  });

  it("uuid generated", () => {

    const customerEntity = new CustomerDomainEntity(data);

    expect(customerEntity.customerId).toEqual(expect.any(String));

  })
});
