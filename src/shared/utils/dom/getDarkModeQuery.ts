export function getDarkModeQuery() {
    if (__IS_CLIENT__) {
        return window.matchMedia('(prefers-color-scheme: dark)');
    }

    return null;
}
