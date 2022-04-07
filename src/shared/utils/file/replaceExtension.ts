export const replaceExtension = (filePath: string, toExtension: string) => filePath
    .replace(/(\.[^.?]+)(\.[^.?]+)?($|[\w&=?]+)/gi, (_match, $1, $2, $3) => (

        /**
         * if second param exists
         * this grants what has content hash
         * and extension on second place
         * not first
         */
        $2
            ? `${ $1 }.${ toExtension }${ $3 }`
            : `.${ toExtension }${ $3 }`)
    );
