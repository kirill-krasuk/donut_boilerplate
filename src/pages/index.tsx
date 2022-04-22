import Home                 from './home';
import Second               from './second';
import ProtectedPage        from './protected-page';
import Page404              from './not-found';
import Posts                from './posts-example';

import type { RouteObject } from 'react-router';

export const AppRoutes = [ Home, Posts, Second, ProtectedPage, Page404 ] as RouteObject[];
