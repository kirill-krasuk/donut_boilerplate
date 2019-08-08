import * as actions from '.';

describe('locale change action', () => {
    const type = 'core/CHANGE_LOCALE';

    it('type must start from the "core" and match the name of the variable', () => {
        expect(actions.CHANGE_LOCALE).toEqual(type);
    });

    it('action must return correctly value', () => {
        const payload        = 'en';
        const expectedAction = {
            payload,
            type
        };

        expect(actions.changeLocaleAction(payload)).toEqual(expectedAction);
    });
});
