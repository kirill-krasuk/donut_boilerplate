import { LoadableComponent } from '@loadable/component';

export type PrefetchedComponent<TProps> = LoadableComponent<TProps> & { prefetch: Function }
export type PComponent = PrefetchedComponent<any>;
