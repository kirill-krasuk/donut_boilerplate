import { InferValueTypes } from '@shared/types/utility';

export type Action = {
    type: string,
    payload: any
}

export type ActionType<T> = T extends { type: infer Type, payload: infer Payload, meta?: infer Meta }
    ? { type: Type, payload: Payload, meta?: Meta }
    : { type: string, payload: undefined, meta?: undefined };

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
    (payload: Payload): ActionCreatorType<Type, Payload>,
    (payload: Payload, meta?: Meta | undefined): ActionCreatorWithMetaType<Type, Payload, Meta>,
    type: Type,
    toString: ActionToString<Type>
}

export type ActionTypeOF<T extends { [key: string]: ActionCreator<any, any, any> }> = ReturnType<InferValueTypes<T>>;
