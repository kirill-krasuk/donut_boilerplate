// @flow
import { fork, all }                   from 'redux-saga/effects';
import type { Saga }                   from 'redux-saga';

import { appSaga }                     from 'app/sagas';
import ready                           from './ready';

// import { startSocketConnection }       from './socket';

export default function* (): Saga<void> {
    yield all([ ...appSaga ]);

    // yield fork(startSocketConnection);
    yield fork(ready);
}
