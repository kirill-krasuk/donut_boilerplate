import { changeThemeAction }       from 'core/actions/theme/index';
import themeReducer, { initState } from '.';

describe('test theme reducer', () => {
    describe('init state', () => {
        it('should return the initial state', () => {
            const state = themeReducer(undefined, {});

            expect(state).toEqual(initState);
        });
    });

    describe('handle CHANGE_THEME action', () => {
        it('state must be correct', () => {
            let state;
            const action = changeThemeAction;

            state = themeReducer(initState, action('dark'));
            expect(state).toEqual({ mode: 'dark' });

            state = themeReducer(state, action('light'));
            expect(state).toEqual({ mode: 'light' });
        });
    });
});
