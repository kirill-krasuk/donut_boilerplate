import type { FC }          from 'react';
import type { RouteObject } from 'react-router-dom';

type RouteProps = {
	params?: Record<string, any>,
	query: string
};

type PrefetchedComponent<T> = FC<Partial<T>> & {
	prefetch(routeObject: RouteProps, auth: boolean): any
};
type PC<T = any> = PrefetchedComponent<T>;
type RouteForPrefetch = RouteObject & { element: { type: PC } };

export type { PrefetchedComponent, PC, RouteForPrefetch };
