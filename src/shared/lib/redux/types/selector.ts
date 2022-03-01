import { Selector as ReSelector } from 'reselect';

// TODO: refactor dependency
import { RootState }              from './state';

export type Selector<T> = ReSelector<RootState, T>
