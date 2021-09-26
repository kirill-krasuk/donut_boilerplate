import { createActionCreator } from '@utils/redux/action-creator';
import { SetPosts }            from '@app/types/posts';

export const setPostsAction = createActionCreator<SetPosts>()('app/SET_POSTS');
