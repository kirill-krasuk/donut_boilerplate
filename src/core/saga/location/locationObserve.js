// @flow
import { put }             from 'redux-saga/effects';
import type { Saga }       from 'redux-saga';

import { callModalAction } from 'core/actions/modal';
import { snakeToCamel }    from 'core/utils/string';

export function* locationObserve({ payload }: Object): Saga<void> {
    const { location: { search } } = payload;

    const regExp = /action/;

    const patterns = search
        .replace('?', '')
        .split('&');

    const calledModalQuery = patterns.find(item => regExp.test(item));

    if (calledModalQuery) {
        // eslint-disable-next-line
        const [ _, modalId ] = calledModalQuery.split('=');

        yield put(callModalAction(snakeToCamel(modalId, 'upper')));
    }
}
