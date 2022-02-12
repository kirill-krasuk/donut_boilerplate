export const replaceExtension = (filePath: string, toExt: string) => filePath
    .replace(/(\.[^.?]+)(\.[^.?]+)?($|[?&\w\d=]+)/gi, (_match, $1, $2, $3) => (

        // if second param exists
        // this grants what has content hash
        // and extension on second place
        // not first
        $2
            ? `${ $1 }.${ toExt }${ $3 }`
            : `.${ toExt }${ $3 }`)
    );
