import { FC, PropsWithChildren } from 'react';
import { RouteObject }           from 'react-router';

type RouteProps = {
    params?: Record<string, any>,
    query: string
}

export type PrefetchedComponent<T> = FC<PropsWithChildren<Partial<T>>> & { prefetch(routeObject: RouteProps, auth: boolean): any }
export type PC<T = any> = PrefetchedComponent<T>;
export type RouteForPrefetch = RouteObject & { element: { type: PC } };
