import { put }             from 'redux-saga/effects';
import { SagaIterator }    from 'redux-saga';

import { callModalAction } from '@core/actions/modal';
import { snakeToCamel }    from '@core/utils/string';

export function* locationObserve({ payload }: Record<string, any>): SagaIterator {
    const { location: { search } } = payload;

    const regExp = /action/;

    const patterns = search
        .replace('?', '')
        .split('&');

    const calledModalQuery = patterns.find(regExp.test);

    if (calledModalQuery) {
        const [ , modalId ] = calledModalQuery.split('=');

        yield put(callModalAction(snakeToCamel(modalId, 'upper')));
    }
}
