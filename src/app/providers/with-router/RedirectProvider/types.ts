import { PropsWithChildren } from 'react';
import { RouteObject }       from 'react-router';

import { Context }           from '@shared/types/client-server';

type AppRouteObject = Record<string, any> & RouteObject;

type Props = PropsWithChildren<{
    context?: Context
}>

export type {
    AppRouteObject,
    Props
};
