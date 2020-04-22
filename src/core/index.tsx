import React               from 'react';
import { hydrate, render } from 'react-dom';
import { loadableReady }   from '@loadable/component';
import { IO }              from 'fp-ts/lib/IO';
import * as O              from 'fp-ts/lib/Option';

import * as Env            from '@core/config/env';
import { App }             from './components';

const getRootNode: IO<O.Option<HTMLElement>> = () => O.fromNullable(document.getElementById('root'));

const isSWNeeded  = Env.get('swEnable');
const needHydrate = Env.get('needHydrate');

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

    renderOrHydrate(
        <App />,
        O.toNullable(getRootNode())
    );
});
