// @flow

import React                   from 'react';
import { hydrate }             from 'react-dom';
import { loadableReady }       from '@loadable/component';

import type { iConfigManager } from 'core/interfaces/ConfigManager';
import { App }                 from './components';
import { container }           from './services/inversify';
import { TYPES }               from './services/types';

loadableReady(() => {
    const ROOT_NODE = document.getElementById('root');

    const configManager: iConfigManager = container.get(TYPES.ConfigManager);
    const isSWNeeded                    = configManager.get('swEnable');

    if (isSWNeeded) {
        if (!window.isSecureContext) {
            window.console.log('SW need a secure context');
        }

        if ('serviceWorker' in navigator) {
            window.addEventListener('load', async () => {
                try {
                // flow-disable-next-line
                    await navigator.serviceWorker.register('/sw.js', { scope: '/' });

                    window.console.log('SW registered');
                } catch (err) {
                    window.console.log('SW registration failed: ', err);
                }
            });
        }
    }

    hydrate(<App />, (ROOT_NODE: any));
});
