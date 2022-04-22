import type { InferValueTypes } from '@shared/types/utility';

type Action = {
	type: string,
	payload: any
};

type ActionType<T> = T extends { type: infer Type, payload: infer Payload, meta?: infer Meta }
	? { type: Type, payload: Payload, meta?: Meta }
	: { type: string, payload: undefined, meta?: undefined };

type ActionCreatorType<Type, Payload> = {
	type: Type,
	payload: Payload
};

type ActionCreatorWithMetaType<Type, Payload, Meta> = {
	type: Type,
	payload: Payload,
	meta?: Meta
};

type ActionToString<Type> = () => Type;

type ActionCreator<Type, Payload, Meta> = {
	(payload: Payload): ActionCreatorType<Type, Payload>,
	(payload: Payload, meta?: Meta | undefined): ActionCreatorWithMetaType<Type, Payload, Meta>,
	type: Type,
	toString: ActionToString<Type>
};

type ActionTypeOF<T extends { [key: string]: ActionCreator<any, any, any> }> = ReturnType<
	InferValueTypes<T>
>;

export type {
	Action,
	ActionType,
	ActionCreatorType,
	ActionCreatorWithMetaType,
	ActionToString,
	ActionCreator,
	ActionTypeOF,
};
