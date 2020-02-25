import * as Pages from '../pages';
import { routes } from './routes';

export default [ {
    ...routes.home,
    exact    : true,
    component: Pages.Home
}, {
    ...routes.second,
    exact    : true,
    component: Pages.Second
}, {
    ...routes.protect,
    exact    : true,
    component: Pages.Protect
}, {
    ...routes[404],
    component: Pages.Page404
} ];
