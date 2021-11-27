const escapeRegex = /{{(\s)?\$([0-9]+)(\s)?}}/g;

const normalizeValues = (args: string[]): number[] => args
    .map(arg => parseInt(arg.replace(escapeRegex, '$2'), 10));

const replace = (str: string, args: string[] | null, valuesToReplace: ReadonlyArray<string | number>, index = 0): string => {
    if (args) {
        if (args.length <= index) {
            return str;
        }

        const replaceValue = valuesToReplace[normalizeValues(args!)[index]].toString();

        return replace(
            str.replace(args![index], replaceValue),
            args,
            valuesToReplace,
            index + 1
        );
    }

    return str;
};

export const interpolate = (message: string | null, values: ReadonlyArray<string | number>, defaultMessage?: string): string => {
    const messageToReplace = message
        ? message
        : defaultMessage || '';

    return replace(messageToReplace, messageToReplace.match(escapeRegex), values);
};
