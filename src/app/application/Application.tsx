import { useEffect, FC, PropsWithChildren } from 'react';

import { withAppProviders }                 from '../providers';

import { clearServerDataContainer }         from './lib';

// manual connection of fonts
// import './styles/fonts.css';

/**
 * base styles that are used in GlobalStyles,
 * since the CSS-in-JS approach is used by default
*/
// import './styles/base-styles.css';

export const Application: FC<PropsWithChildren<unknown>> = withAppProviders(() => {
    useEffect(() => {
        clearServerDataContainer();
    }, []);

    return null;
});

Application.displayName = 'App';
