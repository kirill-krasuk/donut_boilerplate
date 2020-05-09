import * as O    from 'fp-ts/lib/Option';
import { pipe }  from 'fp-ts/lib/pipeable';

import { Space } from '@core/types/style';

export const getSpacing = (space?: Space) => pipe(
    O.fromNullable(space),
    O.fold(
        () => '0',
        (space) => space
            .map(s => `${ s }px`)
            .join(' ')
    )
);
