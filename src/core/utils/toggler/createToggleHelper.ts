export function createToggleHelper<T extends Object>(object: T) {
    return function<K extends keyof T> (key: K) {
        return object[key];
    };
}
