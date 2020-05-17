import { RemoteData } from '@devexperts/remote-data-ts';

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type SetPosts = {
    type: 'app/SET_POSTS';
    payload: RemoteData<Error, Post[]>;
}
