import React               from 'react';
import { hydrate, render } from 'react-dom';
import { loadableReady }   from '@loadable/component';

import { ConfigManager }   from '@core/services';
import { App }             from './components';

const ROOT_NODE = document.getElementById('root');

const configManager: ConfigManager = new ConfigManager();
const isSWNeeded                   = configManager.get('swEnable');
const needHydrate                  = configManager.get('needHydrate');

const renderOrHydrate = needHydrate
    ? hydrate
    : render;

loadableReady(() => {
    if (isSWNeeded) {
        if (!window.isSecureContext) {
            window.console.log('SW need a secure context');
        }

        if ('serviceWorker' in navigator) {
            window.addEventListener('load', async () => {
                try {
                    await navigator.serviceWorker.register('/sw.js', { scope: '/' });

                    window.console.log('SW registered');
                } catch (err) {
                    window.console.log('SW registration failed: ', err);
                }
            });
        }
    }

    renderOrHydrate(<App />, ROOT_NODE);
});
