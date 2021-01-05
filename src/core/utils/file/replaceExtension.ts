export const replaceExtension = (filePath: string, toExt: string) => filePath
    .replace(/\.([^.?]+)($|[?&\w\d=]+)/gi, (_match, _$1, $2) => `.${ toExt }${ $2 }`);
