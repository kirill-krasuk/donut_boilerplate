import { createElement } from 'react';

const createFactory =
	<T extends Record<string, any>>(componentsMap: T) =>
	<Type extends keyof T, Props>(type: Type, props?: Props) =>
			(Reflect.has(componentsMap, type)
				? createElement(componentsMap[type], props ?? {})
				: null);

export { createFactory };
