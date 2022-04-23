import type { ReactNode } from 'react';

type ModalProps = {
	children: ReactNode,
	onClose?(): void,
	title?: string
};

export type { ModalProps };
