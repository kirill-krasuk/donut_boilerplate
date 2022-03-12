import { ReactElement } from 'react';
import { RouteObject }  from 'react-router';

import { Context }      from '@server/types/context';

export type AppRouteObject = Record<string, any> & RouteObject;

export type Props = {
    context?: Context,
    children: ReactElement
}
