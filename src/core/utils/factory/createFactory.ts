import React from 'react';

export function createFactory<T extends Record<string, any>>(componentsMap: T) {
    return function<Type extends keyof T, Props> (type: Type, props?: Props) {
        if (Object.prototype.hasOwnProperty.call(componentsMap, type)) {
            return React.createElement(componentsMap[type], props);
        }

        return null;
    };
}
