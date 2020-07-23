import Cookie      from 'js-cookie';
import * as O      from 'fp-ts/lib/Option';
import * as IO     from 'fp-ts/lib/IO';
import { pipe }    from 'fp-ts/lib/pipeable';

import { Context } from '@server/types/context';

export const getAuthToken = (serverContext?: Context): IO.IO<O.Option<string>> => () => pipe(
    O.fromNullable(Cookie.get('token')),
    O.getOrElse(() => pipe(
        O.fromNullable(serverContext),
        O.fold(
            () => null,
            context => context.token
        )
    )),
    O.fromNullable
);
