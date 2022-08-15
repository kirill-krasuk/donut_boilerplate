import { withServerProviders } from '../providers/server';

import type { VFC }            from 'react';

const Application: VFC<ServerSideProps> = withServerProviders();

export { Application };
