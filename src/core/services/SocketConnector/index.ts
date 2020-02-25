import { SocketConnector as ISocketConnector } from '@core/interfaces/SocketConnector';
import { api }                                 from '@app/routes/api';
import { ConfigManager }                       from '../ConfigManager';

export class SocketConnector implements ISocketConnector {
    _socket: any = null;
    _isConnect = false;

    _configManager: ConfigManager = new ConfigManager();

    connect = async (ownOptions?: Record<string, any>): Promise<Record<string, any>> => {
        const io = await import('socket.io-client');

        if (this._isConnect) {
            this.disconnect();
        }

        this._socket = io.connect(this._configManager.get('apiHost'), {
            path: api.socket.path,
            ...ownOptions
        });

        return new Promise((resolve) => {
            this._socket.on('connect', () => {
                this._isConnect = true;

                resolve(this._socket);
            });
        });
    }

    disconnect = (): ISocketConnector => {
        this._socket.disconnect();

        return this;
    }
}
