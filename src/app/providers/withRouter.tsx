import { ComponentType } from 'react';
import { BrowserRouter } from 'react-router-dom';

import RedirectProvider  from '@app/components/RedirectProvider';
import Routes            from '@app/routes';

export function withRouter<T>(Component: ComponentType<T>) {
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
