import { ComponentType, PropsWithChildren } from 'react';
import { RouteObject }                      from 'react-router';

import { routes }                           from '@config/routes';

type RouteByPropsPageOptions = {
    component: ComponentType<PropsWithChildren<unknown>>,
    path?: string,
    protect?: boolean,
    prefetch?(): Promise<any>
};

type RouteByNamePageOptions ={
    routeName?: keyof typeof routes,
    component: ComponentType<PropsWithChildren<unknown>>,
    prefetch?(): Promise<any>
}

type RouteExtendedObject = RouteObject & {
    protect: boolean
}

export type {
    RouteByNamePageOptions,
    RouteByPropsPageOptions,
    RouteExtendedObject
};
