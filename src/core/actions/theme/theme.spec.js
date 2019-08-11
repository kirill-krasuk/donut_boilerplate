import * as actions from '.';

describe('change theme action', () => {
    const regExp = /^core/;
    const type   = actions.CHANGE_THEME;

    it('type must start from the "core" and match the name of the variable', () => {
        expect(regExp.test(type)).toBeTruthy();
    });

    it('action must return correctly value', () => {
        const payload = 'light';

        const actual   = actions.changeThemeAction(payload);
        const expected = {
            payload,
            type
        };

        expect(actual).toEqual(expected);
    });
});
