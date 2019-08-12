import * as actions from '.';

describe('Socket action creators', () => {
    const regExp = /^core/;

    describe('Socket init action', () => {
        const type = actions.SOCKET_INIT;

        it('type must start from the "core" and match the name of the variable', () => {
            expect(regExp.test(type)).toBeTruthy();
        });

        it('action must return correctly value', () => {
            const payload = { socket: '' };

            const actual   = actions.socketInitAction(payload);
            const expected = {
                payload,
                type
            };

            expect(actual).toEqual(expected);
        });
    });

    describe('Socket reconnect action', () => {
        const type = actions.SOCKET_RECONNECT;

        it('type must start from the "core" and match the name of the variable', () => {
            expect(regExp.test(type)).toBeTruthy();
        });

        it('action must return correctly value', () => {
            const payload = { socket: '' };

            const actual   = actions.socketReconnectAction(payload);
            const expected = {
                payload,
                type
            };

            expect(actual).toEqual(expected);
        });
    });
});
