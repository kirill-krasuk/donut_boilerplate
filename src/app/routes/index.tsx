import { RouteObject } from 'react-router';

import * as Pages      from '../pages';
import { routes }      from './routes';

export default [ {
    ...routes.home,
    exact  : true,
    element: <Pages.Home />
}, {
    ...routes.second,
    exact  : true,
    element: <Pages.Second />
}, {
    ...routes.posts,
    exact  : true,
    element: <Pages.Posts />
}, {
    ...routes.protect,
    exact  : true,
    element: <Pages.Protect />
}, {
    ...routes[404],
    element: <Pages.Page404 />
} ] as RouteObject[];
