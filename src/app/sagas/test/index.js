import { takeEvery } from 'redux-saga/effects';

// eslint-disable-next-line
function* test() {
    console.log('hello app saga');
}

export default function* () {
    yield takeEvery('core/READY', test);
}
