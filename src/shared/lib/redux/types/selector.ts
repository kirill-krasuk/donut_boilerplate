import { Selector as ReSelector } from '@reduxjs/toolkit';

// TODO: refactor dependency
import { RootState }              from './state';

export type Selector<T> = ReSelector<RootState, T>
