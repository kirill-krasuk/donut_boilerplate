import { FC }                      from 'react';

import { getInitialProps }         from '@lib/react';
import { RedirectContextProvider } from '@shared/context/redirect-context';
import { useRedirect }             from './hooks';
import { Props }                   from './types';

/**
 * Server Side Component
 *
 * Use for extend with auth redirect logic
 */
export const RedirectProvider: FC<Props> = ({ context: serverContext, children }) => {
    useRedirect(serverContext);

    return (
        <RedirectContextProvider value={ { ...getInitialProps(serverContext) } }>
            { children }
        </RedirectContextProvider>
    );
};
