import { FC }              from 'react';
import { useInitialProps } from '@hooks/index';

// import { env }             from '@env/index';

type InitialProps = {
    posts: any[]
}

const PostsPage: FC = () => {
    const { posts } = useInitialProps<InitialProps>();

    return (
        <div>
            {
                posts
                    ? (
                        <div style={ { color: 'white' } }>
                            { posts.map(post => (
                                <div key={ post.id }>
                                    <span>{ `${ post.id  })` } </span>

                                    <span>{ post.title }</span>
                                </div>
                            )) }
                        </div>
                    )
                    : 'loading'
            }
        </div>
    );
};

// PostsPage.prefetch = async () => {
//     console.log('DD: ', env.client.api);
//     const res  = await fetch(`${ env.client.api }/posts`);
//     const data = await res.json();

//     console.log('DD:', data);

//     return {
//         posts: data
//     };
// };

export default PostsPage;
