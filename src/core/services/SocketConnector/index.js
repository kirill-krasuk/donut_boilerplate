// @flow

import type { iSocketConnector } from 'core/interfaces/SocketConnector';
import type { iConfigManager }   from 'core/interfaces/ConfigManager';
import api                       from 'app/routes/api';
import { ConfigManager }         from '../ConfigManager';

export class SocketConnector implements iSocketConnector {
    _socket: Object;
    _isConnect: boolean = false;

    _configManager: iConfigManager = new ConfigManager();

    connect = async (ownOptions?: Object): Promise<Object> => {
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

    disconnect = (): iSocketConnector => {
        this._socket.disconnect();

        return this;
    }
}
