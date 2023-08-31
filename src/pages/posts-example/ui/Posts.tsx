import { useInitialProps } from '@hooks/index';

import * as S              from './styles';

import type { VFC }        from 'react';

type Post = {
	id: string | number,
	title: string
};

type InitialProps = {
	posts: Post[]
};

const PostsPage: VFC = () => {
	const { posts } = useInitialProps<InitialProps>();

	if (!posts) {
		return <div>
			Loading
		</div>;
	}

	return (
		<S.PostsContainer>
			{ posts.map(post => (
				<S.PostItem key={ post.id }>
					<span>
						{ `${ post.id }) ` }
					</span>

					<span>
						{ post.title }
					</span>
				</S.PostItem>
			)) }
		</S.PostsContainer>
	);
};

export default PostsPage;
