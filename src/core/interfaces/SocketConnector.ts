// @flow

import { ConfigManager } from './ConfigManager';

export interface SocketConnector {
    _socket: Record<string, any>;
    _isConnect: boolean;

    _configManager: ConfigManager;

    connect(ownOptions?: Record<string, any>): Promise<Record<string, any>>;
    disconnect(): SocketConnector;
}
