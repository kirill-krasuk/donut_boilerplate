import { hydrate, render } from 'react-dom';
import { loadableReady }   from '@loadable/component';
import { IO }              from 'fp-ts/lib/IO';
import * as O              from 'fp-ts/lib/Option';
import * as C              from 'fp-ts/lib/Console';

import env                 from '@env/';
import { App }             from './components';

const getRootNode: IO<O.Option<HTMLElement>> = () => O.fromNullable(document.getElementById('root'));

const renderOrHydrate = env.needHydrate
    ? hydrate
    : render;

loadableReady(() => {
    if (env.swEnable) {
        if (!window.isSecureContext) {
            C.log('SW need a secure context')();
        }

        if ('serviceWorker' in navigator) {
            window.addEventListener('load', async () => {
                try {
                    await navigator.serviceWorker.register('/sw.js', { scope: '/' });

                    C.log('SW registered')();
                } catch (err) {
                    C.error(`SW registration failed: ${ err }`)();
                }
            });
        }
    }

    renderOrHydrate(
        <App />,
        O.toNullable(getRootNode())
    );
});
