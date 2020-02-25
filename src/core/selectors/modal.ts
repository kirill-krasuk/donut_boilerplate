import { createSelector } from 'reselect';
import R                  from 'ramda';

import { EModals }        from '@app/enums/modal';
import { Selector }       from '@core/types/selector';
import { ModalState }     from '@core/types/modal';

const selectModal: Selector<ModalState> = R.prop('modal');

export const getModalId = createSelector<object, ReturnType<typeof selectModal>, EModals | ''>(
    [ selectModal ],
    R.prop('id')
);

export const getHasModal = createSelector<object, ReturnType<typeof getModalId>, boolean>(
    getModalId,
    R.complement(R.isNil)
);
