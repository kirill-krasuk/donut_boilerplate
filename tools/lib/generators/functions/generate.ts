import { create }                                from './create';
import { update }                                from './update';

import type { CreateTuple, Schema, UpdateTuple } from '../types/schema';

type Data = Record<string, any>;

function isArrayOfTuples(value: any): value is [string, string][] {
	return Array.isArray(value[0]);
}

const createCallback =
	(data: Data) => ([ destination, template ]: CreateTuple) => create(template, destination, data);

const updateCallback =
	(data: Data) => ([ source, fileType ]: UpdateTuple) => update(source, fileType, data);

export function generate(schema: Schema, data: Data) {
	Object.values(schema).forEach(type => {
		if (type.create) {
			if (isArrayOfTuples(type.create)) {
				type.create.forEach(createCallback);
			} else {
				const [ destination, template ] = type.create;

				create(template, destination, data);
			}
		}

		if (type.update) {
			if (isArrayOfTuples(type.update)) {
				type.update.forEach(updateCallback);
			} else {
				const [ source, fileType ] = type.update;

				update(source, fileType, data);
			}
		}
	});
}
