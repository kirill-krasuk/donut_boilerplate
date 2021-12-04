import { FC }              from 'react';

import { getInitialProps } from '@utils/props/getInitialProps';
import { useRedirect }     from './hooks';
import { Provider }        from './context';
import { Props }           from './types';

/**
 * Server Side Component
 *
 * Use for extend with auth redirect logic
 */
const RedirectProvider: FC<Props> = ({ context: serverContext, children }) => {
    useRedirect(serverContext);

    return (
        <Provider value={ { ...getInitialProps(serverContext) } }>
            { children }
        </Provider>
    );
};

export default RedirectProvider;
