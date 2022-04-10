import { ComponentType, PropsWithChildren } from 'react';
import { RouteObject }                      from 'react-router';

import { routes }                           from '@config/routes';

export type RouteByPropsPageOptions = {
    component: ComponentType<PropsWithChildren<unknown>>,
    path?: string,
    protect?: boolean,
    prefetch?(): Promise<any>
};

export type RouteByNamePageOptions ={
    routeName?: keyof typeof routes,
    component: ComponentType<PropsWithChildren<unknown>>,
    prefetch?(): Promise<any>
}

export type RouteExtendedObject = RouteObject & {
    protect: boolean
}
