import { changeLocaleAction }       from '@core/actions/locale';
import localeReducer, { initState } from '.';

describe('test locale reducer', () => {
    describe('init state', () => {
        it('should return the initial state', () => {
            const state = localeReducer(undefined, ({} as any));

            expect(state).toEqual(initState);
        });
    });

    describe('handle CHANGE_LOCALE action', () => {
        it('state must be correct', () => {
            let state;
            const action = changeLocaleAction;

            // @ts-ignore
            state = localeReducer(initState, action('ru'));
            expect(state).toEqual('ru');

            // @ts-ignore
            state = localeReducer(state, action('en'));
            expect(state).toEqual('en');
        });
    });
});
