import R                                                  from 'ramda';

import { ValidationMode }                                 from '@core/enums/validation';
import { validateValues }                                 from '@core/utils/validation';
import { ValidationElem, ValidationSchemeString, Errors } from './types';

export const getElementEventType = ({ type }: ValidationElem) => (
    type !== 'checkbox'
        ? 'input'
        : 'change'
);

export const targetFlow = (mergeFields: (value: string | boolean) => (name: string) => void) => ({
    type,
    name,
    checked,
    value
}: EventTarget & ValidationElem) => {
    switch (true) {
        case type === 'checkbox':
            mergeFields(checked)(name);
            break;

        case type === 'text':
        case type === 'password':
        case type === 'email':
            mergeFields(value)(name);
            break;

        default: break;
    }
};

export const checkMode = <T extends ValidationMode>(modes: T) => (mode: T) => !!(modes & mode);

const transformSchemeToErrors = <V extends Record<string, any>>(scheme: ValidationSchemeString, values: V) => (acc: any, curr: string) => ({
    ...acc,
    [curr]: validateValues(scheme[curr])(values[curr])
});

export const checkScheme = <V extends Record<string, any>>(scheme: ValidationSchemeString, values: V): Errors<V> => R.compose(
    R.reduce(transformSchemeToErrors(scheme, values), {}),
    R.keys
)(scheme);

export const checkSchemeByField = <V extends Record<string, any>>(field: string, scheme: ValidationSchemeString, values: V): Errors<V> => R.compose(
    R.reduce(transformSchemeToErrors(scheme, values), {}),
    R.filter(R.equals(field)),
    R.keys
)(scheme);
