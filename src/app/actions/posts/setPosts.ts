import { createAction } from 'typesafe-actions';

import { SetPosts }     from '@app/types/posts';

export const SET_POSTS: SetPosts['type'] = 'app/SET_POSTS';
export const setPostsAction = createAction(SET_POSTS)<SetPosts['payload']>();
