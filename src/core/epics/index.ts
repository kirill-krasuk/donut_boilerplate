import { combineEpics } from 'redux-observable';

import epics            from '@app/epics';

export default combineEpics(
    ...epics
);
