import { Selector as ReSelector } from 'reselect';
import { RootState }              from './state';

export type Selector<T> = ReSelector<RootState, T>
