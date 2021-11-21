import { combineEpics } from 'redux-observable';

import epics            from '@app/store/epics';

// import { callModalEpic }  from './modal/callModal';
// import { closeModalEpic } from './modal/closeModal';

export default combineEpics(
    ...epics,

    // callModalEpic,
    // closeModalEpic
);
