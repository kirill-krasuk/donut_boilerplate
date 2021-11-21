import { Post, SetPosts } from '@app/types/posts';

export type State = Post[] | null;

export type Action = SetPosts;
