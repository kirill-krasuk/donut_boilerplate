import * as actions from '.';

describe('Modal actions', () => {
    describe('Call modal action', () => {
        const regExp = /^core/;
        const type   = actions.CALL_MODAL;

        it('type must start from the "core" and match the name of the variable', () => {
            expect(regExp.test(type)).toBeTruthy();
        });

        it('the action should return correct object', () => {
            let payload = 'TestModal';

            let actual   = actions.callModalAction(payload);
            let expected = {
                type,
                payload
            };

            expect(actual).toEqual(expected);

            payload = {
                id     : 'TestModal',
                history: false
            };

            actual   = actions.callModalAction(payload);
            expected = {
                type,
                payload
            };

            expect(actual).toEqual(expected);
        });
    });

    describe('Close modal action', () => {
        const regExp = /^core/;
        const type   = actions.CLOSE_MODAL;

        it('type must start from the "core" and match the name of the variable', () => {
            expect(regExp.test(type)).toBeTruthy();
        });

        it('the action should return correct object', () => {
            const actual   = actions.closeModalAction();
            const expected = {
                type,
                payload: undefined
            };

            expect(actual).toEqual(expected);
        });
    });

    describe('Set modal action', () => {
        const regExp = /^core/;
        const type   = actions.SET_MODAL;

        it('type must start from the "core" and match the name of the variable', () => {
            expect(regExp.test(type)).toBeTruthy();
        });

        it('the action should return correct object', () => {
            const payload = 'TestModal';

            const actual   = actions.setModalAction(payload);
            const expected = {
                type,
                payload
            };

            expect(actual).toEqual(expected);
        });
    });

    describe('Set modal history flag action', () => {
        const regExp = /^core/;
        const type   = actions.SET_MODAL_HISTORY_FLAG;

        it('type must start from the "core" and match the name of the variable', () => {
            expect(regExp.test(type)).toBeTruthy();
        });

        it('the action should return correct object', () => {
            const payload = true;

            const actual   = actions.setModalHistoryFlagAction(payload);
            const expected = {
                type,
                payload
            };

            expect(actual).toEqual(expected);
        });
    });
});
