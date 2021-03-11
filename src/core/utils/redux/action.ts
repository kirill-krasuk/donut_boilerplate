import { ActionCreator, ActionCreatorType, ActionCreatorWithMetaType } from '@core/types/actions';

declare type TypeConstant = string;

export function createActionCreator<T extends TypeConstant>(type: T) {
    return function<P, M = undefined> (): ActionCreator<T, P, M> {
        function actionCreator(payload: P): ActionCreatorType<T, P>
        function actionCreator(payload: P, meta: M): ActionCreatorWithMetaType<T, P, M>
        function actionCreator(payload: any, meta?: any): any {
            if (meta) {
                return {
                    type,
                    payload,
                    meta
                };
            }

            return {
                type,
                payload
            };
        }

        actionCreator.type     = type;
        actionCreator.toString = () => type;

        return actionCreator;
    };
}
