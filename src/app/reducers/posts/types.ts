import { RemoteData }     from '@devexperts/remote-data-ts';

import { Post, SetPosts } from '@app/types/posts';

export type State = RemoteData<Error, Post[]>

export type Action = SetPosts;
