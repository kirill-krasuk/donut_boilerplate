export function createHashHelper(isProd: boolean) {
    return function (template: string, hash: string) {
        return isProd
            ? template.replace(/\.[^.]+$/, `.[${ hash }]$&`)
            : template;
    };
}
