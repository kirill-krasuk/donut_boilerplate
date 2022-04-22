export { getInitialProps } from './functions/props/getInitialProps';
export { createFactory } from './functions/factory/createFactory';
export { createRoutePage } from './functions/builder/createRoutePage';

export { ErrorBoundary } from './components/ErrorBoundary';

export type { PC, PrefetchedComponent, RouteForPrefetch } from './types/components';
export type {
	RouteByNamePageOptions,
	RouteByPropsPageOptions,
	RouteExtendedObject
} from './types/builder';
