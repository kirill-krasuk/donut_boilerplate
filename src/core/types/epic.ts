import { RequestObservable } from './HTTP';

export type EpicDependencies = {
    request$: RequestObservable;
}
