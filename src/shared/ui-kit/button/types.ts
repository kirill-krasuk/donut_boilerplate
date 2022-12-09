import type { MouseEventHandler, HTMLAttributes } from 'react';
import type { ButtonSizes, ButtonThemes }         from './enums';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
	onClick?: MouseEventHandler<HTMLButtonElement>,
	size?: ButtonSizes,
	theme?: ButtonThemes
};

export type { ButtonProps };
