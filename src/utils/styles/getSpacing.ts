import { Space } from '@core/types/style';

const toStringPx = (num: number) => `${ num }px`;

export const getSpacing = (space?: Space) => (!space ? '0' : space.map(toStringPx).join(' '));
