import React               from 'react';
import { EOLocale as T }   from 'eo-locale';
import { useDispatch }     from 'react-redux';
import { hot }             from 'react-hot-loader/root';
import * as O              from 'fp-ts/lib/Option';

import { routes }          from '@app/routes/routes';
import * as UiKit          from '@ui-kit/components';
import { callModalAction } from '@core/actions/modal';
import { EModals }         from '@app/enums/modal';
import * as S              from './styled';
import messages            from './messages';

const Home: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();

    return (
        <>
            <UiKit.Header />
            <S.Container>
                <S.Text>
                    <T.Text id={ messages.title } />
                </S.Text>
                <S.Link to={ routes.second.path }>
                    <T.Text id={ messages.link } />
                </S.Link>
                <button onClick={ (): void => { dispatch(callModalAction({ id: O.some(EModals.Greeting), history: true })); } }>ok</button>
            </S.Container>
        </>
    );
};

export default hot(Home);
