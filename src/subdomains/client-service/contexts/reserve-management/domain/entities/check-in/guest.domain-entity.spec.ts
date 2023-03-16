import { GuestDomainEntity } from './guest.domain-entity';

describe('GuestDomainEntity', () => {

  const data = {
    fullName: "Cristian Tironi",
    document: 12345678,
    phone: "091929394",
    email: "correo@correo.com"
  }

  it('test guest', () => {

    const guestEntity = new GuestDomainEntity(data);

    expect(guestEntity.fullName).toEqual("Cristian Tironi");
    expect(guestEntity.document).toEqual(12345678);
    expect(guestEntity.phone).toEqual("091929394");
    expect(guestEntity.email).toEqual("correo@correo.com");
  });

  it("uuid generated", () => {

    const guestEntity = new GuestDomainEntity(data);

    expect(guestEntity.guestId).toEqual(expect.any(String));

  })
});
