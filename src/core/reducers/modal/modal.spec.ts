import * as actions                from 'core/actions/modal';
import modalReducer, { initState } from '.';

describe('test theme reducer', () => {
    describe('init state', () => {
        it('should return the initial state', () => {
            const state = modalReducer({
                id        : null,
                hasHistory: false
            }, {});

            expect(state).toEqual(initState);
        });
    });

    describe('handle SET_MODAL action', () => {
        it('state must be correct', () => {
            let state;
            const action = actions.setModalAction;

            state = modalReducer(initState, action('Gretting'));
            expect(state).toEqual({
                ...initState,
                id: 'Gretting'
            });

            state = modalReducer(state, action('TestModal'));
            expect(state).toEqual({
                ...initState,
                id: 'TestModal'
            });
        });
    });

    describe('handle SET_MODAL_HISTORY_FLAG action', () => {
        it('state must be correct', () => {
            let state;
            const action = actions.setModalHistoryFlagAction;

            state = modalReducer(initState, action(true));
            expect(state).toEqual({
                ...initState,
                hasHistory: true
            });

            state = modalReducer(state, action(false));
            expect(state).toEqual({
                ...initState,
                hasHistory: false
            });
        });
    });
});
