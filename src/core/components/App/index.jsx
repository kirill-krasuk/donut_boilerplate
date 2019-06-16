// @flow
import React, { useEffect }         from 'react';
import type { ComponentType, Node } from 'react';
import { Provider }                 from 'react-redux';
import { hot }                      from 'react-hot-loader/root';

import Router                       from 'core/components/Router';
import { store, history }           from 'core/utils/store';

const App: ComponentType<{}> = (): Node => {
    useEffect(() => {
        window.onload = function () {
            const storage = document.getElementById('ssr-store');

            if (storage && storage.parentNode) {
                storage.parentNode.removeChild(storage);
            }
        };
    });

    return (
        <Provider store={ store }>
            <Router history={ history } />
        </Provider>
    );
};

export default hot(App);
