import { createActionCreator } from '@lib/redux';
import { SetPosts }            from '@app/store/types/posts';

export const setPostsAction = createActionCreator<SetPosts>()('app/SET_POSTS');
