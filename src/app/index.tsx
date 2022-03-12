import { hydrate, render } from 'react-dom';
import { loadableReady }   from '@loadable/component';

import env                 from '@env/';
import { App }             from './components';

const getRootNode = () => document.querySelector('#root');

const renderOrHydrate = env.client.needHydrate
    ? hydrate
    : render;

loadableReady(() => {
    if (env.client.swEnable) {
        if (!window.isSecureContext) {
            console.info('SW need a secure context');
        }

        if ('serviceWorker' in navigator) {
            window.addEventListener('load', async () => {
                try {
                    await navigator.serviceWorker.register('/sw.js', { scope: '/' });

                    console.info('SW registered');
                } catch (err) {
                    console.error(`SW registration failed: ${ err }`);
                }
            });
        }
    }

    renderOrHydrate(
        <App />,
        getRootNode()
    );
});
