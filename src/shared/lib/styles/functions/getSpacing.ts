import type { Space } from '../types/spacing';

const toStringPx = (number_: number) => `${ number_ }px`;

const getSpacing = (space?: Space) => (!space
	? '0'
	: space.map(toStringPx).join(' '));

export { getSpacing };
