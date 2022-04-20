import type {
    ActionType,
    ActionCreator,
    ActionCreatorType,
    ActionCreatorWithMetaType
} from '../../types/actions';

export function createActionCreator<T>() {
    return function<K extends ActionType<T>> (type: K['type']): ActionCreator<
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
