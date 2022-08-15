import { Greeting }  from './ui/greeting';
import { ModalTest } from './ui/modal-test';

export * as modalsModel from './model';

export type { ModalHasHistory, CallModalObjectPayload } from './types';
export { Modals } from './types/enums';

const modalsMap = {
	Greeting,
	ModalTest
};

export { modalsMap };
