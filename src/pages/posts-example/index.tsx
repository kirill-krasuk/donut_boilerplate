import loadable                   from '@loadable/component';

import { createRoutePage }        from '@lib/react';

import { getPosts }               from './api/getPosts';

import type { PropsWithChildren } from 'react';

const PostsPage = loadable<PropsWithChildren<unknown>>(
	() => import(/* webpackChunkName: "Posts" */ './ui/Posts'),
	{
		fallback: <div>
			Loading...
		</div>
	}
);

async function prefetch() {
	return {
		posts: await getPosts()
	};
}

export default createRoutePage({
	routeName: 'posts',
	component: PostsPage,
	prefetch
});
