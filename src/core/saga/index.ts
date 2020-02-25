import { fork, all }        from 'redux-saga/effects';
import { SagaIterator }     from 'redux-saga';

import { appSaga }          from '@app/sagas';
import modal                from './modal';
import location             from './location';
import fetchListener        from './fetchListener';

// import ready                           from './ready';

// import { startSocketConnection }       from './socket';

export default function* (): SagaIterator {
    yield all([ ...appSaga ]);

    yield fork(modal);
    yield fork(location);
    yield fork(fetchListener);

    // yield fork(startSocketConnection);
    // yield fork(ready);
}
