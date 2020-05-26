export const replaceExtension = (filePath: string, toExt: string) => filePath
    .replace(/\.([^.]+)($|\?)/gi, (_match, _$1, $2) => `.${ toExt }${ $2 }`);
