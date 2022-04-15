import { create } from './create';
import { update } from './update';
import { Schema } from '../config/schema';

function isArrayOfTuples(value: any): value is [string, string][] {
    return Array.isArray(value[0]);
}

export function generate(schema: Schema, data: Record<string, any>) {
    Object.values(schema).forEach((type) => {
        if (type.create) {
            if (isArrayOfTuples(type.create)) {
                type.create.forEach(([ destination, template ]) => create(template, destination, data));
            } else {
                const [ destination, template ] = type.create;

                create(template, destination, data);
            }
        }

        if (type.update) {
            if (isArrayOfTuples(type.update)) {
                type.update.forEach(([ source, fileType ]) => update(source, fileType, data));
            } else {
                const [ source, fileType ] = type.update;

                update(source, fileType, data);
            }
        }
    });
}
