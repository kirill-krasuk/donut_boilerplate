import { FC }  from 'react';
import * as TE from 'fp-ts/lib/TaskEither';

type RouteObject = {
    params: Record<string, any>;
    query: string;
}

export type PrefetchedComponent<TProps> = FC<TProps> & { prefetch: (routeObject: RouteObject, auth: boolean) => TE.TaskEither<void, any> }
export type PComponent = PrefetchedComponent<any>;
