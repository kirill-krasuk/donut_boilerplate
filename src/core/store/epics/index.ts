import { combineEpics }   from 'redux-observable';

import epics              from '@app/store/epics';
import { callModalEpic }  from './modal/callModal';
import { closeModalEpic } from './modal/closeModal';
import { locationEpic }   from './location';

export default combineEpics(
    ...epics,
    locationEpic,
    callModalEpic,
    closeModalEpic
);
