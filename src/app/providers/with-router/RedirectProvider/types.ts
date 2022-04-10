import { PropsWithChildren } from 'react';
import { RouteObject }       from 'react-router';

import { Context }           from '@shared/types/client-server';

export type AppRouteObject = Record<string, any> & RouteObject;

export type Props = PropsWithChildren<{
    context?: Context
}>
