import * as Components from '../components';

export default [ {
    path     : '/',
    exact    : true,
    component: Components.HomePage
}, {
    path     : '/second',
    exact    : true,
    component: Components.SecondPage
} ];
