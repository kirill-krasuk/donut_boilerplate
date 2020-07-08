import { matchRoutes } from 'react-router-config';
import * as RD         from '@devexperts/remote-data-ts';
import * as E          from 'fp-ts/lib/Either';
import * as O          from 'fp-ts/lib/Option';
import { pipe }        from 'fp-ts/lib/pipeable';

import { PComponent }  from '@core/types/components';
import routes          from '@core/components/Router/routes';

export async function prefetch(url: string, auth: any = null) {
    const [ pathname, query ] = url.split('?');
    const [ , appRoute ]      = matchRoutes(routes, pathname);

    if (appRoute && appRoute.route) {
        const { route, match } = appRoute;
        const { component }    = route;

        const pComponent = component as PComponent;

        if (pComponent.prefetch) {
            const data = await pComponent.prefetch({ params: match.params, query }, auth)();

            return pipe(
                data,
                E.fold(
                    (error) => RD.fromEither(E.left(error)),
                    (values: Record<string, any>) => Object
                        .keys(values)
                        .reduce((acc: Record<string, any>, curr: string) => ({ ...acc, [curr]: RD.fromEither(E.right(values[curr])) }), {})
                ),
                O.fromNullable
            );
        }
    }
    return O.none;
}
