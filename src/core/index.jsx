// @flow
import React             from 'react';
import { hydrate }       from 'react-dom';
import { loadableReady } from '@loadable/component';

import { App }           from './components';

loadableReady(() => {
    const ROOT_NODE = document.getElementById('root');

    if (!window.isSecureContext) {
        window.console.log('SW need a secure context');
    }

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', async () => {
            Notification.requestPermission();

            try {
                // flow-disable-next-line
                await navigator.serviceWorker.register('/sw.js');

                window.console.log('SW registered');
            } catch (err) {
                window.console.log('SW registration failed: ', err);
            }
        });
    }

    hydrate(<App />, (ROOT_NODE: any));
});
