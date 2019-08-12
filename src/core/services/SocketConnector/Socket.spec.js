import { container } from 'core/services/inversify';
import { TYPES }     from 'core/services/types';


describe('SocketConnector service', () => {
    let socketConnector;

    beforeEach(() => {
        socketConnector = container.get(TYPES.SocketConnector);
    });

    it('sockets must be disconnected if before they were connected ', () => {
        socketConnector.disconnect = jest.fn();
        socketConnector._isConnect = true;
        socketConnector.connect();

        const actual = socketConnector.disconnect;

        expect(actual).toHaveBeenCalled();
    });
});
