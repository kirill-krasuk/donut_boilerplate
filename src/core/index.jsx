import React      from 'react';
import { render } from 'react-dom';

import { App }    from './components';

const ROOT_NODE = document.getElementById('root');

if (!window.isSecureContext) {
    window.console.log('SW need a secure context');
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('../../dist/sw.js').then(() => {
            window.console.log('SW registered');
        }).catch((registrationError) => {
            window.console.log('SW registration failed: ', registrationError);
        });
    });
}

render(<App />, ROOT_NODE);
