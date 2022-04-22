import type { PropsWithChildren } from 'react';
import type { RouteObject }       from 'react-router';
import type { Context }           from '@shared/types/client-server';

type AppRouteObject = Record<string, any> & RouteObject;

type Props = PropsWithChildren<{
	context?: Context
}>;

export type { AppRouteObject, Props };
