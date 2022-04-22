import { Modal }                      from '../ui/Modal';

import type { FC, PropsWithChildren } from 'react';

export const Greeting: FC<PropsWithChildren<unknown>> = () => (
	<Modal title='Welcome'>Welcome to New Donut Boilerplate!</Modal>
);
