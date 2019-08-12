// @flow
import type { iConfigManager } from './ConfigManager';

export interface iSocketConnector {
    _socket: Object;
    _isConnect: boolean;

    _configManager: iConfigManager;

    connect(ownOptions?: Object): Promise<Object>;
    disconnect(): iSocketConnector;
}
