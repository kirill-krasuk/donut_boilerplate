import React     from 'react';
import { Store } from 'redux';
import * as TE   from 'fp-ts/lib/TaskEither';

type RouteObject = {
    params: Record<string, any>;
    query: string;
}

export type PrefetchedComponent<TProps> = React.FC<TProps> & { prefetch: (store: Store, routeObject: RouteObject, auth: boolean) => TE.TaskEither<void, void | null> }
export type PComponent = PrefetchedComponent<any>;
