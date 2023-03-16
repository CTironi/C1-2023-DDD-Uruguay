import { FullNameValueObject } from './full-name.value-object';

describe('FullNameValueObject', () => {
  it("test name", () => {

    //Arrange
    const value = "Cristian Tironi";

    //Act
    const fullName = new FullNameValueObject(value);
    fullName.validateData();

    //Assert
    expect(fullName.hasErrors()).toBeFalsy();
    const errors = fullName.getErrors();
    if (errors.length > 0) {
      expect(errors[0].field).toEqual('FullName');
      expect(errors[0].message).toBe('No es un nombre valido');
    }
  });

  it("test number ", () => {

    const value = "Crist4n Tir80ni";

    const fullName = new FullNameValueObject(value);

    fullName.validateData();

    expect(fullName.hasErrors()).toBeTruthy()
    const errors = fullName.getErrors();
    if (errors.length > 0) {
      expect(errors[0].field).toEqual('FullName');
      expect(errors[0].message).toBe('No es un nombre valido');
    }

  });

  it("test structure", () => {

    const value = "CriStIan tirONi";

    const fullName = new FullNameValueObject(value);

    fullName.validateData();

    expect(fullName.hasErrors()).toBeTruthy();
    const errors = fullName.getErrors();

    if (errors.length > 0) {
      expect(errors[0].field).toEqual('FullName');
      expect(errors[0].message).toBe('No es un nombre valido');
    }
  });
});
