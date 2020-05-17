import { Store }          from 'redux';
import { sequenceT }      from 'fp-ts/lib/Apply';
import * as TE            from 'fp-ts/lib/TaskEither';
import * as C             from 'fp-ts/lib/Console';
import { pipe }           from 'fp-ts/lib/pipeable';
import { success }        from '@devexperts/remote-data-ts';

import { api }            from '@app/routes/api';
import { Post }           from '@app/types/posts';
import http               from '@core/services/FpHTTP';
import { setPostsAction } from '@app/actions/posts';

export default ({ dispatch }: Store) => pipe(
    sequenceT(TE.taskEither)(
        http.get<Post[]>(api.test.posts),
        TE.right('Prefetched data example')
    ),
    TE.map(([ posts, example ]) => [ posts.data, example ] as [ Post[], string ]),
    TE.map(([ posts, example ]) => {
        pipe(
            posts,
            success,
            setPostsAction,
            dispatch
        );

        C.log(example)();

        return null;
    }),
    TE.mapLeft(error => C.error(error)())
);
