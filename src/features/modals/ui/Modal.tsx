import {
	FC,
	useCallback,
	useEffect,
	useRef
} from 'react';

import { KeyCodes } from '@shared/enums/key-codes';
import {
	useActions,
	useClickOutside,
	useLockBodyScroll
} from '@hooks/index';

import * as actions        from '../model/store/actions';
import * as S              from './styles';

import type { ModalProps } from './types';

// TODO: complete modal functional
const Modal: FC<ModalProps> = props => {
	const { children, title, onClose } = props;

	const { closeModal } = useActions(actions);

	useLockBodyScroll();

	const ref = useRef<HTMLDivElement>(null);

	const handleKeyPress = useCallback(
		(event: KeyboardEvent) => {
			const { code } = event;

			if (code === KeyCodes.Escape) {
				closeModal();

				if (onClose) {
					onClose();
				}
			}
		},
		[ closeModal, onClose ]
	);

	useEffect(() => {
		document.addEventListener('keyup', handleKeyPress);

		return () => {
			document.removeEventListener('keyup', handleKeyPress);
		};
	}, [ handleKeyPress ]);

	useClickOutside(ref, () => {
		if (onClose) {
			onClose();
		}

		closeModal();
	});

	// TODO: move to ui-kit modal
	return (
		<S.Backdrop>
			<S.Wrapper ref={ ref }>
				{ title && <S.Head>
					{ title }
				</S.Head> }

				<S.Body>
					{ children }
				</S.Body>
			</S.Wrapper>
		</S.Backdrop>
	);
};

export { Modal };
