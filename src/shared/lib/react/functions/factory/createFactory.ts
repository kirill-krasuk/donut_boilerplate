import { createElement } from 'react';

function createFactory<T extends Record<string, any>>(componentsMap: T) {
	return function <Type extends keyof T, Props> (type: Type, props?: Props) {
		if (Reflect.has(componentsMap, type)) {
			return createElement(componentsMap[type], props);
		}

		return null;
	};
}

export { createFactory };
