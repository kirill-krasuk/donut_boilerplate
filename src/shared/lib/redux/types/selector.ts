import { Selector as ReSelector } from '@reduxjs/toolkit';

export type Selector<T> = ReSelector<AppState, T>
