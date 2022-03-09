export type InferValueTypes<T> = T extends Record<string, infer U>
    ? U
    : never;
