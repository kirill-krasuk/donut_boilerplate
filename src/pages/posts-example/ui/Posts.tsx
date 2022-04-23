import { useInitialProps } from '@hooks/index';

import type { FC }         from 'react';

type InitialProps = {
	posts: any[]
};

const PostsPage: FC = () => {
	const { posts } = useInitialProps<InitialProps>();

	return (
		<div>
			{ posts
				? (
					<div style={ { color: 'white' } }>
						{ posts.map(post => (
							<div key={ post.id }>
								<span>
									{ `${ post.id })` }

									{ ' ' }
								</span>

								<span>
									{ post.title }
								</span>
							</div>
						)) }
					</div>
				)
				: (
					'loading'
				) }
		</div>
	);
};

export default PostsPage;
