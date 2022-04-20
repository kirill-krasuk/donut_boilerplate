import type { ReactNode } from 'react';

export type Props = {
    children: ReactNode,
    onClose?(): void,
    title?: string
}
