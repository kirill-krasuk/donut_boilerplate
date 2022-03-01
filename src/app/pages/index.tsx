import { RouteObject } from 'react-router';

import Home            from './Home';
import Second          from './Second';
import Protect         from './Protect';
import Page404         from './404';
import Posts           from './Posts.example';

import { routes }      from '../config/routes';

export default [ {
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
    element: <Protect />
}, {
    ...routes[404],
    element: <Page404 />
} ] as RouteObject[];
