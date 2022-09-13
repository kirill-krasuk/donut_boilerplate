import type { ReactNode } from 'react';

type ModalProps = {
	children: ReactNode,
	title?: string,
	onClose?(): void
};

export type { ModalProps };
