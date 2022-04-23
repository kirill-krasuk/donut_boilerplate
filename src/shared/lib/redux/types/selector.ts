import type { Selector as ReSelector } from '@reduxjs/toolkit';

type Selector<T> = ReSelector<AppState, T>;

export type { Selector };
