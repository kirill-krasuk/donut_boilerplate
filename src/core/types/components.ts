import React from 'react';

export type PrefetchedComponent<TProps> = React.FC<TProps> & { prefetch: Function }
export type PComponent = PrefetchedComponent<any>;
