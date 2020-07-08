import React             from 'react';
import { EOLocale as T } from 'eo-locale';
import { hot }           from 'react-hot-loader/root';
import * as RD           from '@devexperts/remote-data-ts';

import { routes }        from '@app/routes/routes';
import Header            from '@app/components/Header';
import { Post }          from '@app/types/posts';
import * as S            from './styled';
import messages          from './messages';
import { Props }         from './types';

const Home: React.FC<Props> = (props) => (
    <>
        <Header />
        <S.Container>
            <S.Text>
                <T.Text id={ messages.title } />
            </S.Text>
            <S.Link to={ routes.second.path }>
                <T.Text id={ messages.link } />
            </S.Link>
            { (function () {
                return RD.fold(
                    () => null,
                    () => null,
                    () => null,
                    (posts: Post[]) => posts.map(post => <div key={ post.id }>{ post.title }</div>)
                )(props.posts || {});
            }()) }
        </S.Container>
    </>
);

export default hot(Home);
