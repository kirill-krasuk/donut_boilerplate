type AnyFunction = (...args: any[]) => any;

type InferValueTypes<T> = T extends Record<string, infer U> ? U : never;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
	k: infer I
) => void
	? I
	: never;

type LastOf<T> = UnionToIntersection<
	T extends any ? () => T : never
> extends () => infer R
	? R
	: never;

type Push<T extends any[], V> = [...T, V];

type TuplifyUnion<
	T,
	L = LastOf<T>,
	N = [T] extends [never] ? true : false
> = true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>;

type ObjectValueTuple<
	T,
	KS extends any[] = TuplifyUnion<keyof T>,
	R extends any[] = []
> = KS extends [infer K, ...infer KT]
	? ObjectValueTuple<T, KT, [...R, T[K & keyof T]]>
	: R;

type Extends<A, B, Then = true, Else = false> = A extends B ? Then : Else;

type If<Condition, Then, Else> = Extends<Condition, true, Then, Else>;

type And<A extends boolean, B extends boolean> = Extends<A, true, B>;

type Or<A extends boolean, B extends boolean> = Extends<A, true, true, B>;

type Not<A extends boolean> = Extends<A, true, false, true>;

type Tuple<T = any> = T[] | [T];

type NoInfer<T> = [T][T extends any ? 0 : never];

type Primitive = bigint | boolean | number | string | symbol | undefined;

type PropertyStringPath<T, Prefix = ''> = {
	[K in keyof T]: T[K] extends Array<any> | Primitive
		? `${ Prefix & string }${ K & string }`
		:
				| PropertyStringPath<T[K], `${ Prefix & string }${ K & string }.`>
				| `${ Prefix & string }${ K & string }`;
}[keyof T];

export type {
	AnyFunction,
	InferValueTypes,
	UnionToIntersection,
	LastOf,
	Push,
	TuplifyUnion,
	ObjectValueTuple,
	Extends,
	If,
	And,
	Or,
	Not,
	Tuple,
	NoInfer,
	Primitive,
	PropertyStringPath
};
