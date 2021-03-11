export type Action = {
    type: string;
    payload: any;
}

export type ActionCreatorType<Type, Payload> = {
    type: Type,
    payload: Payload
}

export type ActionCreatorWithMetaType<Type, Payload, Meta> = {
    type: Type,
    payload: Payload,
    meta?: Meta
}

export type ActionToString<Type> = () => Type;

export type ActionCreator<Type, Payload, Meta> = {
    (payload: Payload): ActionCreatorType<Type, Payload>;
    (payload: Payload, meta?: Meta | undefined): ActionCreatorWithMetaType<Type, Payload, Meta>;
    type: Type;
    toString: ActionToString<Type>;
}
