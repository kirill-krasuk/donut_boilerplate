import { Rule, ValidatedValue } from '@core/types/validation';
import { EValidationMode }      from '@core/enums/validation';

export type ValidationScheme<T> = Record<keyof T, Rule[]>;

export type ValidationSchemeString = Record<string, Rule[]>;

export type ValidationElem = HTMLInputElement;

export type ProvideErrors<T> = {
    errors: Errors<T>;
    valid: boolean;
}

export type Props<T> = {
    validationScheme: ValidationScheme<T> | {};
    modes?: EValidationMode;
}

export type Errors<O> = Record<keyof O, ValidatedValue>;
