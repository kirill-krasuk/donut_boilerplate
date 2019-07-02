// @flow
import { takeEvery } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';

import { canUseDOM } from 'core/utils/dom';

// eslint-disable-next-line
function* ready(): Saga<void> {
    if (canUseDOM) {
        console.log('!!!!!hello saga and dom has been loaded!!!!!');
    }
}

export default function* (): Saga<void> {
    yield takeEvery('core/READY', ready);
}
