import { RouteObject }   from 'react-router';

import { routes }        from '@config/routes';

import { Home }          from './home';
import { Second }        from './second';
import { ProtectedPage } from './protected-page';
import { Page404 }       from './not-found';
import { Posts }         from './posts-example';

export const AppRoutes = [ {
    ...routes.home,
    exact  : true,
    element: <Home />
}, {
    ...routes.second,
    exact  : true,
    element: <Second />
}, {
    ...routes.posts,
    exact  : true,
    element: <Posts />
}, {
    ...routes.protect,
    exact  : true,
    element: <ProtectedPage />
}, {
    ...routes[404],
    element: <Page404 />
} ] as RouteObject[];
