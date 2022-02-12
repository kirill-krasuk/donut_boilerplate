import { Post, SetPosts } from '@app/store/types/posts';

export type State = Post[] | null;

export type Action = SetPosts;
