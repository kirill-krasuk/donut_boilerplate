// @flow
import { injectable, inject }    from 'inversify';
import io                        from 'socket.io-client';

import type { iSocketConnector } from 'core/interfaces/SocketConnector';
import type { iConfigManager }   from 'core/interfaces/ConfigManager';
import api                       from 'app/routes/api';
import { TYPES }                 from '../types';

@injectable()
export class SocketConnector implements iSocketConnector {
    _socket: Object;
    _isConnect: boolean = false;

    @inject(TYPES.ConfigManager) _configManager: iConfigManager;

    connect = (ownOptions?: Object): Promise<Object> => {
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
