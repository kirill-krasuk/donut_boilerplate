// @flow

export interface iIterable {
    keys(): Iterator<*>;
    values(): Iterator<*>;
    entries(): Iterator<*>;
}
