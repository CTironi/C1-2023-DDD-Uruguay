import { DocumentValueObject } from './document.value-object';

describe('DocumentValueObject', () => {
  it("is number", () => {

    const value = 12345678;

    const document = new DocumentValueObject(value);
    document.validateData();

    expect(document.hasErrors()).toBeFalsy();
    const errors = document.getErrors();
    if (errors.length > 0) {
      expect(errors[0].field).toEqual('Document');
      expect(errors[0].message).toBe('No es un documento valido');
    }
  });

  it("long", () => {

    const value = 123;

    const document = new DocumentValueObject(value);

    document.validateData();

    expect(document.hasErrors()).toBeTruthy()
    const errors = document.getErrors();
    if (errors.length > 0) {
      expect(errors[0].field).toEqual('Document');
      expect(errors[0].message).toBe('No es un documento valido');
    }

  });

  it("test structure", () => {

    const value = 1234567-89;

    const document = new DocumentValueObject(value);

    document.validateData();

    expect(document.hasErrors()).toBeTruthy();
    const errors = document.getErrors();

    if (errors.length > 0) {
      expect(errors[0].field).toEqual('Document');
      expect(errors[0].message).toBe('No es un documento valido');
    }
  });
});
