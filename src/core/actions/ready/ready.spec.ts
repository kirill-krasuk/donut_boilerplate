import * as actions from '.';

describe('Ready app action', () => {
    const type   = actions.READY;
    const regExp = /^core/;

    it('type must start from the "core" and match the name of the variable', () => {
        expect(regExp.test(type)).toBeTruthy();
    });

    it('action must return correctly payload', () => {
        const payload = undefined;

        const actual   = actions.readyAction(payload);
        const expected = {
            payload,
            type
        };

        expect(actual).toEqual(expected);
    });
});
