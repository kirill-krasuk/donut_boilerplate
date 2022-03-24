import { ComponentType } from 'react';
import { RouteObject }   from 'react-router';

import { routes }        from '@config/routes';

export type RouteByPropsPageOptions = {
    component: ComponentType,
    path?: string,
    protect?: boolean,
    prefetch?(): Promise<any>
};

export type RouteByNamePageOptions ={
    routeName?: keyof typeof routes,
    component: ComponentType,
    prefetch?(): Promise<any>
}

export type RouteExtendedObject = RouteObject & {
    protect: boolean
}
