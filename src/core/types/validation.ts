import * as E   from 'fp-ts/lib/Either';
import * as NEA from 'fp-ts/lib/NonEmptyArray';

export type LiftedRule<L, A> = (a: A) => E.Either<NEA.NonEmptyArray<L>, A>;

export type ValidatedValue = E.Either<NEA.NonEmptyArray<string>, string>;

export type Rule = (a: string) => E.Either<string, string>;
