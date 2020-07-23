import { flow }                             from 'fp-ts/lib/function';
import * as E                               from 'fp-ts/lib/Either';
import * as O                               from 'fp-ts/lib/Option';
import { sequenceT }                        from 'fp-ts/lib/Apply';
import * as NEA                             from 'fp-ts/lib/NonEmptyArray';
import { pipe }                             from 'fp-ts/lib/pipeable';
import R                                    from 'ramda';

import { ValidatedValue, LiftedRule, Rule } from '@core/types/validation';

const lift = <L, A>(check: (a: A) => E.Either<L, A>): LiftedRule<L, A> => a => pipe(
    check(a),
    E.mapLeft(a => [ a ])
);

const provideRules = (value: string) => (rules: Rule[]) => rules.map(rule => lift(rule)(value));

export const isValid = (errors: Record<string, ValidatedValue>) => Object.keys(errors).every((key) => E.isRight(errors[key]));

export const parseError = flow(
    E.fold(
        R.identity,
        () => null
    )
);

export const parseErrors = (errors: Record<string, E.Left<string[]>>) => R.reject(R.isNil)(
    Object
        .keys(errors)
        .reduce((acc, curr) => ({
            ...acc,
            [curr]: parseError(errors[curr])
        }), {})
);

// @ts-ignore
export const validateValues = (rules: Rule[]) => (value: string): ValidatedValue => pipe(
    rules,
    (rules) => (
        !rules || R.isEmpty(rules)
            ? O.none
            : O.some(rules)
    ),
    O.fold(
        () => null,
        (rules) => pipe(
            sequenceT(E.getValidation(NEA.getSemigroup<string>()))(

                // @ts-ignore
                ...provideRules(value)(rules)
            ),
            E.map(() => value)
        )
    ),
);
