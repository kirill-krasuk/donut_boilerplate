import * as O        from 'fp-ts/lib/Option';
import * as IO       from 'fp-ts/lib/IO';
import { pipe }      from 'fp-ts/lib/pipeable';
import R             from 'ramda';

import { Context }   from '@server/types/context';
import { canUseDOM } from '@utils/dom';

let initialProps = O.none;

const getInitialPropsFromDOM: IO.IO<O.Option<{ [key: string]: any }>> = () => {
    if (canUseDOM) {
        if (Reflect.has(window, '__INITIAL_PROPS__')) {
            // @ts-ignore
            initialProps = window.__INITIAL_PROPS__;

            // @ts-ignore
            delete window.__INITIAL_PROPS__;
        }

        return initialProps;
    }

    return O.none;
};

export const getInitialProps = (ctx?: Context) => pipe(
    ctx,
    O.fromNullable,
    O.chain(({ initialProps }) => initialProps),
    O.fold(
        () => pipe(
            getInitialPropsFromDOM(),
            O.fold(
                () => ({}),
                R.identity
            )
        ),
        R.identity
    )
);
