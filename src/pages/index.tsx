import Home                 from './home';
import Page404              from './not-found';
import Posts                from './posts-example';
import ProtectedPage        from './protected-page';
import Second               from './second';

import type { RouteObject } from 'react-router-dom';

const AppRoutes = [ Home, Posts, Second, ProtectedPage, Page404 ] as RouteObject[];

export { AppRoutes };
