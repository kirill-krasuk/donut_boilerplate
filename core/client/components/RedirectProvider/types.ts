import { ReactElement } from 'react';
import { RouteObject }  from 'react-router';

import { Context }      from '@server/types/context';

export type AppRouteObject = RouteObject & { [key: string]: any };

export type Props = {
    context?: Context,
    children: ReactElement
}
