import { ComponentType }    from 'react';
import { BrowserRouter }    from 'react-router-dom';

import Routes               from '@app/routes';
import { RedirectProvider } from './RedirectProvider';

export function withRouter(Component: ComponentType) {
    function RouterProvider() {
        return (
            <BrowserRouter>
                <RedirectProvider>
                    <Routes />
                </RedirectProvider>
            </BrowserRouter>
        );
    }

    RouterProvider.displayName = `withRouter(${ Component.displayName })`;

    return RouterProvider;
}
