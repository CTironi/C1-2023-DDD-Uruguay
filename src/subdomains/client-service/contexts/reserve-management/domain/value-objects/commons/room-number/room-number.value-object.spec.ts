import { RoomNumberValueObject } from './room-number.value-object';

describe('RoomNumberValueObject', () => {
  it("is number", () => {

    const value = 2;

    const room = new RoomNumberValueObject(value);
    room.validateData();

    expect(room.hasErrors()).toBeFalsy();
    const errors = room.getErrors();
    if (errors.length > 0) {
      expect(errors[0].field).toEqual('RoomNumber');
      expect(errors[0].message).toBe('No es una room valida');
    }
  });

  it("long", () => {

    const value = 123;

    const room = new RoomNumberValueObject(value);

    room.validateData();

    expect(room.hasErrors()).toBeTruthy()
    const errors = room.getErrors();
    if (errors.length > 0) {
      expect(errors[0].field).toEqual('RoomNumber');
      expect(errors[0].message).toBe('Se proporciono un numero muy alto');
    }

  });

  it("negative", () => {

    const value = -3;

    const room = new RoomNumberValueObject(value);

    room.validateData();

    expect(room.hasErrors()).toBeTruthy();
    const errors = room.getErrors();

    if (errors.length > 0) {
      expect(errors[0].field).toEqual('RoomNumber');
      expect(errors[0].message).toBe('Se proporciono un numero bajo');
    }
  });
});

