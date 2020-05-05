import { SyntheticEvent } from 'react';

export const prevent = <E extends SyntheticEvent>(fn: (e: E) => any) => (e: E) => (e.preventDefault(), fn(e));
