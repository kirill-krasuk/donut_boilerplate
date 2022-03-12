export type InferValueTypes<T> = T extends Record<string, infer U>
    ? U
    : never;

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

export type LastOf<T> = UnionToIntersection<T extends any ? () => T : never> extends () => (infer R) ? R : never

export type Push<T extends any[], V> = [...T, V];

export type TuplifyUnion<T, L = LastOf<T>, N = [T] extends [never] ? true : false> =
    true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>

export type ObjValueTuple<T, KS extends any[] = TuplifyUnion<keyof T>, R extends any[] = []> =
    KS extends [infer K, ...infer KT]
        ? ObjValueTuple<T, KT, [...R, T[K & keyof T]]>
        : R

export type Extends<A, B, Then = true, Else = false> = A extends B
    ? Then
    : Else;

export type If<Condition, Then, Else> = Extends<Condition, true, Then, Else>;

export type And<A extends boolean, B extends boolean> = Extends<
    A,
    true,
    B,
    false
>;

export type Or<A extends boolean, B extends boolean> = Extends<
    A,
    true,
    true,
    B
>;

export type Not<A extends boolean> = Extends<A, true, false, true>;

export type Tuple<T = any> = T[] | [T];
