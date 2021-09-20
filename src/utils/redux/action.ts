import { ActionCreator, ActionCreatorType, ActionCreatorWithMetaType } from '@core/types/actions';

type ActionType<T> = T extends { type: infer Type, payload: infer Payload, meta?: infer Meta }
    ? { type: Type, payload: Payload, meta?: Meta }
    : { type: string, payload: undefined, meta?: undefined };

export function createActionCreator<T>() {
    return function<K extends ActionType<T>> (type: K['type']) : ActionCreator<
        K['type'],
        K['payload'],
        K['meta']
    > {
        function actionCreator(payload: K['payload']): ActionCreatorType<
            K['type'],
            K['payload']
        >
        function actionCreator(payload: K['payload'], meta: K['meta']): ActionCreatorWithMetaType<
            K['type'],
            K['payload'],
            K['meta']
        >
        function actionCreator(payload: any, meta?: any): any {
            return {
                type,
                payload,
                ...(meta && { meta })
            };
        }

        actionCreator.type     = type;
        actionCreator.toString = () => type;

        return actionCreator;
    };
}
