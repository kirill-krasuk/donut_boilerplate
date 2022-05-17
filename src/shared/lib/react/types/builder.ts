import type { ComponentType, PropsWithChildren } from 'react';
import type { RouteObject }                      from 'react-router-dom';
import type { routes }                           from '@config/routes';

type RouteByPropsPageOptions = {
	component: ComponentType<PropsWithChildren<unknown>>,
	path?: string,
	protect?: boolean,
	prefetch?(): Promise<any>
};

type RouteByNamePageOptions = {
	routeName?: keyof typeof routes,
	component: ComponentType<PropsWithChildren<unknown>>,
	prefetch?(): Promise<any>
};

type RouteExtendedObject = RouteObject & {
	protect: boolean
};

export type { RouteByNamePageOptions, RouteByPropsPageOptions, RouteExtendedObject };
