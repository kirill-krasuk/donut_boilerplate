import { PC }              from '@lib/react';
import { useInitialProps } from '@hooks/index';
import env                 from '@env/';
import { Post }            from '@app/store/types/posts';

type InitialProps = {
    posts: Post[]
}

const PostsPage: PC = () => {
    const { posts } = useInitialProps<InitialProps>();

    return posts && (
        <div style={ { color: 'white' } }>
            { posts.map(post => (
                <div key={ post.id }>
                    <span>{ `${ post.id  })` } </span>
                    <span>{ post.title }</span>
                </div>
            )) }
        </div>
    );
};

PostsPage.prefetch = async () => {
    const res  = await fetch(`${ env.client.api }/posts`);
    const data = await res.json();

    return {
        posts: data
    };
};

export default PostsPage;
