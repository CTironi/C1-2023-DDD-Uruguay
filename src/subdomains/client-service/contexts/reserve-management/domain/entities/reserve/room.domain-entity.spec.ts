import { RoomDomainEntity} from './room.domain-entity';

describe('Room', () => {

  const data = {
    location: "Piso4",
    accommodation: "Basica",
    type: "Doble",
    state: true,
    roomNumber: 1
  }

  it('test room', () => {

    const roomEntity = new RoomDomainEntity(data);

    expect(roomEntity.location).toEqual("Piso4");
    expect(roomEntity.accommodation).toEqual("Basica");
    expect(roomEntity.type).toEqual("Doble");
    expect(roomEntity.state).toEqual(true);
    expect(roomEntity.roomNumber).toEqual(1);
  });

  it("uuid generated", () => {

    const roomEntity = new RoomDomainEntity(data);

    expect(roomEntity.roomId).toEqual(expect.any(String));

  })
});
