import { Selector as ReSelector } from 'reselect';

export type Selector<T> = ReSelector<Record<string, any>, T>
