import { IsValidString } from "./string.validation";

describe('IsValidString', () => {

    let validator: typeof IsValidString;

    beforeEach(() => {
        validator = IsValidString;
    });

    it('test existe', () => {
        expect(validator).toBeDefined();
    });

    it('test true', () => {

        const value = "soyUnString";
        const expected = true;

        const result = validator(value);

        expect(result).toEqual(expected);
    });
})