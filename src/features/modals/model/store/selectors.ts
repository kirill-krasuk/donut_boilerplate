import R                   from 'ramda';

import type { Selector }   from '@lib/redux';
import type { ModalState } from '../../types';

const selectModal: Selector<ModalState> = R.prop('modal');

const getModalId = R.compose(R.prop('id'), selectModal);

const getHasModal = R.compose(R.complement(R.isNil), getModalId);

export { getHasModal, getModalId };
