import * as actions from '.';

describe('locale change action', () => {
    const regExp = /^core/;
    const type   = actions.CHANGE_LOCALE;

    it('type must start from the "core" and match the name of the variable', () => {
        expect(regExp.test(type)).toBeTruthy();
    });

    it('action must return correctly value', () => {
        const payload = 'en';

        const actual   = actions.changeLocaleAction(payload);
        const expected = {
            payload,
            type
        };

        expect(actual).toEqual(expected);
    });
});
