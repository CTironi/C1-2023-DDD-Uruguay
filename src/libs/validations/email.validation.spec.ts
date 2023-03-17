import { IsValidEmail } from "./email.validation";

describe('IsValidEmail', () => {

    let validator: typeof IsValidEmail;

    beforeEach(() => {
        validator = IsValidEmail;
    });

    it('test existe', () => {
        expect(validator).toBeDefined();
    });

    it('test true', () => {

        const value = "correo123@correo.com.uy";
        const expected = true;

        const result = validator(value);

        expect(result).toEqual(expected);
    });

    it('test structure sin @', () => {

        const value = "correo.com";
        const expected = false;

        const result = validator(value);

        expect(result).toEqual(expected);
    });

    it('test structure', () => {

        const value = "correo@correo@correo.com.com";
        const expected = false;

        const result = validator(value);

        expect(result).toEqual(expected);
    });
})