import { SocketConnector } from './index';


describe('SocketConnector service', () => {
    let socketConnector;

    beforeEach(() => {
        socketConnector = new SocketConnector();
    });

    it('sockets must be disconnected if before they were connected ', () => {
        socketConnector.disconnect = jest.fn();
        socketConnector._isConnect = true;
        socketConnector.connect();

        const actual = socketConnector.disconnect;

        expect(actual).toHaveBeenCalled();
    });
});
