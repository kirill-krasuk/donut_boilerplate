import { useEffect, FC }            from 'react';

import { withAppProviders }         from '@app/providers';
import { clearServerDataContainer } from './lib';

// manual connection of fonts
// import './styles/fonts.css';

export const Application: FC = withAppProviders(() => {
    useEffect(() => {
        clearServerDataContainer();
    }, []);

    return null;
});

Application.displayName = 'App';
