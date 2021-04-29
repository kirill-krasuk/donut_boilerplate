import { createActionCreator } from '@core/utils/redux/action';
import { SetPosts }            from '@app/types/posts';

export const setPostsAction = createActionCreator<SetPosts>()('app/SET_POSTS');
