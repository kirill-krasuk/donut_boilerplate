import { createSelector } from '@reduxjs/toolkit';
import R                  from 'ramda';

import { Selector }       from '@lib/redux';
import { ModalState }     from '../../types';

const selectModal: Selector<ModalState> = R.prop('modal');

export const getModalId = createSelector(
    [ selectModal ],
    R.prop('id')
);

export const getHasModal = createSelector(
    getModalId,
    R.complement(R.isNil)
);
