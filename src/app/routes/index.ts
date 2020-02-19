// @flow

import * as Components from '../components';
import routes          from './routes';

export default [ {
    ...routes.home,
    exact    : true,
    component: Components.HomePage
}, {
    ...routes.second,
    exact    : true,
    component: Components.SecondPage
} ];
