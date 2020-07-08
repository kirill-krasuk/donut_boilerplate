import { sequenceT } from 'fp-ts/lib/Apply';
import * as TE       from 'fp-ts/lib/TaskEither';
import * as C        from 'fp-ts/lib/Console';
import { pipe }      from 'fp-ts/lib/pipeable';

import { api }       from '@app/routes/api';
import { Post }      from '@app/types/posts';
import http          from '@core/services/FpHTTP';

export default () => pipe(
    sequenceT(TE.taskEither)(
        http.get<Post[]>(api.test.posts),
        TE.right('Prefetched data example')
    ),
    TE.map(([ posts, example ]) => ({ posts: posts.data, example })),
    TE.mapLeft(error => C.error(error)()),
);
