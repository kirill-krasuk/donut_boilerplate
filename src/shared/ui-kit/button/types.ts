import type {
	MouseEventHandler,
	PropsWithChildren,
	ReactNode
} from 'react';
import type { ButtonSizes, ButtonStyles } from './enums';

type ButtonProps = PropsWithChildren<{
	onClick?: MouseEventHandler<HTMLButtonElement>,

	/**
	 * Small 24px
	 * Medium 32px
	 * Large 48px
	 */
	size?: ButtonSizes,

	/**
	 * "primary"
	 * "secondary"
	 */
	style?: ButtonStyles,

	children: ReactNode
}>;

export type { ButtonProps };
