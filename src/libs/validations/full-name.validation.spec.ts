import { IsValidFullName } from "./full-name.validation";

describe('IsValidFullName', () => {

    let validator: typeof IsValidFullName;

    beforeEach(() => {
        validator = IsValidFullName;
    });

    it('test existe', () => {
        expect(validator).toBeDefined();
    });

    it('test true', () => {

        const value = "Cristian Tironi";
        const expected = true;

        const result = validator(value);

        expect(result).toEqual(expected);
    });

    it('test con numeros', () => {

        const value = "Crist21ian Tir12oni";
        const expected = false;

        const result = validator(value);

        expect(result).toEqual(expected);
    });

    it('test structure', () => {

        const value = "CrIsTian tiRoNI";
        const expected = false;

        const result = validator(value);

        expect(result).toEqual(expected);
    });
})