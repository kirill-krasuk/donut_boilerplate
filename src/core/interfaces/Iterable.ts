export interface Iterable {
    keys(): Iterator<any>;
    values(): Iterator<any>;
    entries(): Iterator<any>;
}
