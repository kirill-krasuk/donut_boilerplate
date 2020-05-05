import * as O   from 'fp-ts/lib/Option';
import * as C   from 'fp-ts/lib/Console';
import { pipe } from 'fp-ts/lib/pipeable';

const escapeRegex = /{{(\s)?\$([0-9]+)(\s)?}}/g;

const normalizeValues = (args: string[]): number[] => args.map(arg => parseInt(arg.replace(escapeRegex, '$2'), 10));

const replace = (str: string, args: string[] | null, valuesToReplace: Array<string | number>, index = 0): string => (
    // eslint-disable-next-line no-nested-ternary
    args
        ? args.length <= index
            ? str
            : replace(
                str.replace(args![index], valuesToReplace[normalizeValues(args!)[index]].toString()),
                args,
                valuesToReplace,
                index + 1
            )
        : str
);

export const interpolate = (message: string | null | undefined, args: Array<string | number>, defaultMessage?: string) => pipe(
    O.fromNullable(message || null),
    (messageOption) => pipe(
        messageOption,
        O.fold(
            () => O.fromNullable(defaultMessage),
            (message: string) => O.some(message)
        )
    ),
    (defaultMessOption) => pipe(
        defaultMessOption,
        O.fold(
            () => (C.error('message and default message is undefined')(), null),
            (message) => replace(message, message.match(escapeRegex), args)
        )
    )
);
