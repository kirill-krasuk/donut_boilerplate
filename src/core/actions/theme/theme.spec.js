import * as actions from '.';

describe('change theme action', () => {
    const type = 'core/CHANGE_THEME';

    it('type must start from the "core" and match the name of the variable', () => {
        expect(actions.CHANGE_THEME).toEqual(type);
    });

    it('action must return correctly value', () => {
        const payload        = 'light';
        const expectedAction = {
            payload,
            type
        };

        expect(actions.changeThemeAction(payload)).toEqual(expectedAction);
    });
});
