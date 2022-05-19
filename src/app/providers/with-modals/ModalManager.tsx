import { createPortal }           from 'react-dom';
import { useSelector }            from 'react-redux';

import { modalsModel, modalsMap } from '@features/modals';

import type { VFC }               from 'react';

const modalNode = document.querySelector('#modal')!;

const ModalManager: VFC = () => {
	const id = useSelector(modalsModel.selectors.getModalId);

	if (!id) {
		return null;
	}

	return createPortal(modalsMap[id], modalNode);
};

export { ModalManager };
