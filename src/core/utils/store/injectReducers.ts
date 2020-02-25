import { canUseDOM } from '../dom';

type InjectedReducersType = { [key: string]: Record<string, any> };

export function injectReducers(reducers: InjectedReducersType): void {
    if (canUseDOM) {
        import('@core/utils/store')
            .then(({ store }) => {
                Object.keys(reducers)
                    .forEach((key) => store.injectReducer(key, reducers[key]));
            });
    }
}
